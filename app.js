// Bible Memorization App - Main Application Logic

let currentDifficulty = 'medium';
let blankedWords = new Set();
let userAnswers = {};
let currentSelectedWord = null;
let totalBlankedWords = 0;
let wordInstanceMap = {}; // Maps unique IDs to word data
let nextWordId = 0;


// Initialize the app
function init() {
    resetSession();
}

// Reset the session with current difficulty
function resetSession() {
    currentDifficulty = document.getElementById('difficulty').value;
    blankedWords = getBlankedWords(currentDifficulty);
    userAnswers = {};
    currentSelectedWord = null;
    wordInstanceMap = {};
    nextWordId = 0;
    
    // Pre-generate word IDs for all blanked words
    generateWordIds();
    
    // Total blanked words is the number of word instances, not unique words
    totalBlankedWords = Object.keys(wordInstanceMap).length;
    
    // Hide score display
    document.getElementById('scoreDisplay').style.display = 'none';
    document.getElementById('wordOptions').style.display = 'none';
    
    renderBibleText();
    updateProgress();
    
    // Auto-select the first blank word
    selectNextBlankWord();
}

// Pre-generate word IDs for all blanked words to maintain consistency
function generateWordIds() {
    const wordIdMap = {}; // Maps word text to array of IDs
    
    BIBLE_DATA.passages.forEach(passage => {
        const words = passage.text.split(/(\s+)/);
        words.forEach(word => {
            if (!word.match(/\s+/)) {
                const cleanWord = word.replace(/[^\w-]/g, '').toLowerCase();
                if (blankedWords.has(cleanWord) && cleanWord.length >= 6) {
                    if (!wordIdMap[cleanWord]) {
                        wordIdMap[cleanWord] = [];
                    }
                    const wordId = nextWordId++;
                    wordIdMap[cleanWord].push(wordId);
                    wordInstanceMap[wordId] = { word: cleanWord, originalWord: cleanWord };
                }
            }
        });
    });
}

// Change difficulty and reset
function changeDifficulty() {
    resetSession();
}

// Change difficulty from score screen
function changeDifficultyAndReset() {
    document.getElementById('difficulty').value = 'easy';
    resetSession();
}

// Render the Bible text with blanked words
function renderBibleText() {
    const container = document.getElementById('bibleText');
    container.innerHTML = '';
    
    // Track word instances to assign consistent IDs
    const wordInstanceCount = {};
    
    BIBLE_DATA.passages.forEach(passage => {
        const verseDiv = document.createElement('div');
        verseDiv.className = 'verse';
        verseDiv.style.marginLeft = (passage.indent * 2) + 'rem';
        
        // Create verse number in superscript
        const verseNum = document.createElement('sup');
        verseNum.className = 'verse-number';
        verseNum.textContent = passage.verseNum;
        verseDiv.appendChild(verseNum);
        
        // Process text and create word elements
        const words = passage.text.split(/(\s+)/);
        words.forEach(word => {
            if (word.match(/\s+/)) {
                // Whitespace
                verseDiv.appendChild(document.createTextNode(word));
            } else {
                // Separate word from trailing punctuation
                const punctuationMatch = word.match(/^([\w-]+)([\.,;:!?\-—]*)$/);
                const cleanWord = word.replace(/[^\w-]/g, '').toLowerCase();
                const trailingPunctuation = punctuationMatch ? punctuationMatch[2] : '';
                
                if (blankedWords.has(cleanWord) && cleanWord.length >= 6) {
                    // Get the instance count for this word
                    if (!wordInstanceCount[cleanWord]) {
                        wordInstanceCount[cleanWord] = 0;
                    }
                    const instanceIndex = wordInstanceCount[cleanWord]++;
                    
                    // Calculate wordId based on word and instance
                    let wordId = null;
                    let currentInstance = 0;
                    for (const id in wordInstanceMap) {
                        if (wordInstanceMap[id].word === cleanWord) {
                            if (currentInstance === instanceIndex) {
                                wordId = parseInt(id);
                                break;
                            }
                            currentInstance++;
                        }
                    }
                    
                    // Create blank word button
                    const wordBtn = document.createElement('button');
                    wordBtn.className = 'blank-word';
                    wordBtn.dataset.wordId = wordId;
                    wordBtn.dataset.word = cleanWord;
                    wordBtn.dataset.originalWord = cleanWord;
                    
                    // Check if already answered
                    if (userAnswers[wordId]) {
                        const answer = userAnswers[wordId];
                        wordBtn.textContent = answer.word;
                        wordBtn.classList.add(answer.correct ? 'correct' : 'incorrect');
                        wordBtn.disabled = true;
                    } else {
                        wordBtn.textContent = '______';
                    }
                    
                    wordBtn.onclick = () => selectWord(wordId, cleanWord, cleanWord);
                    verseDiv.appendChild(wordBtn);
                    
                    // Add trailing punctuation after the button
                    if (trailingPunctuation) {
                        verseDiv.appendChild(document.createTextNode(trailingPunctuation));
                    }
                } else {
                    // Regular word
                    verseDiv.appendChild(document.createTextNode(word));
                }
            }
        });
        
        container.appendChild(verseDiv);
    });
}

// Select a word to fill in
function selectWord(wordId, cleanWord, originalWord) {
    // If already answered, don't allow selection
    if (userAnswers[wordId]) {
        return;
    }
    
    // Remove selected class from all blank words
    document.querySelectorAll('.blank-word.selected').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to the clicked word
    const selectedBtn = document.querySelector(`[data-word-id="${wordId}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    currentSelectedWord = wordId;
    const alternatives = getAlternatives(originalWord);
    
    // Shuffle alternatives and put correct answer in random position
    const options = [originalWord, ...alternatives.slice(0, 2)];
    const shuffled = options.sort(() => Math.random() - 0.5);
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    shuffled.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectOption(option, originalWord);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('wordOptions').style.display = 'block';
}

// Select an option
function selectOption(selectedWord, correctWord) {
    const isCorrect = selectedWord.toLowerCase() === correctWord.toLowerCase();
    
    // Record answer
    userAnswers[currentSelectedWord] = {
        word: selectedWord,
        correct: isCorrect
    };
    
    // Re-render text to show filled word
    renderBibleText();
    updateProgress();
    
    // Check if all words are answered
    if (Object.keys(userAnswers).length === totalBlankedWords) {
        showScore();
    } else {
        // Find and select the next unanswered blank word
        selectNextBlankWord();
    }
}

// Select the next unanswered blank word
function selectNextBlankWord() {
    // Find all blank word buttons
    const blankButtons = document.querySelectorAll('.blank-word:not(:disabled)');
    
    if (blankButtons.length > 0) {
        // Select the first unanswered blank word
        blankButtons[0].click();
    }
}

// Update progress bar
function updateProgress() {
    const answered = Object.keys(userAnswers).length;
    const percentage = totalBlankedWords > 0 ? Math.round((answered / totalBlankedWords) * 100) : 0;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = percentage;
}

// Show final score
function showScore() {
    const correct = Object.values(userAnswers).filter(a => a.correct).length;
    const percentage = Math.round((correct / totalBlankedWords) * 100);
    
    document.getElementById('finalScore').textContent = percentage;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('totalCount').textContent = totalBlankedWords;
    
    // Hide word options and show score display
    document.getElementById('wordOptions').style.display = 'none';
    document.getElementById('scoreDisplay').style.display = 'flex';
    document.getElementById('bibleText').style.opacity = '0.5';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
