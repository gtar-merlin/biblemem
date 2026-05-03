// Bible Memorization App - Main Application Logic

let currentDifficulty = 'medium';
let blankedWords = new Set();
let userAnswers = {};
let currentSelectedWord = null;
let totalBlankedWords = 0;

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
    totalBlankedWords = blankedWords.size;
    
    // Hide score display
    document.getElementById('scoreDisplay').style.display = 'none';
    document.getElementById('wordOptions').style.display = 'none';
    
    renderBibleText();
    updateProgress();
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
                    // Create blank word button
                    const wordBtn = document.createElement('button');
                    wordBtn.className = 'blank-word';
                    wordBtn.dataset.word = cleanWord;
                    wordBtn.dataset.originalWord = cleanWord;
                    
                    // Check if already answered
                    if (userAnswers[cleanWord]) {
                        const answer = userAnswers[cleanWord];
                        wordBtn.textContent = answer.word;
                        wordBtn.classList.add(answer.correct ? 'correct' : 'incorrect');
                        wordBtn.disabled = true;
                    } else {
                        wordBtn.textContent = '______';
                    }
                    
                    wordBtn.onclick = () => selectWord(cleanWord, cleanWord);
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
function selectWord(cleanWord, originalWord) {
    // If already answered, don't allow selection
    if (userAnswers[cleanWord]) {
        return;
    }
    
    currentSelectedWord = cleanWord;
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
    
    document.getElementById('scoreDisplay').style.display = 'block';
    document.getElementById('bibleText').style.opacity = '0.5';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
