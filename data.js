// Philippians 2:1-18 NIV - Bible Memorization Data
// Text formatted with verse numbers and proper indentation

const BIBLE_DATA = {
    passages: [
        {
            verseNum: "1",
            text: "Therefore if you have any encouragement from being united with Christ, if any comfort from his love, if any common sharing in the Spirit, if any tenderness and compassion,",
            indent: 0
        },
        {
            verseNum: "2",
            text: "then make my joy complete by being like-minded, having the same love, being one in spirit and of one mind.",
            indent: 0
        },
        {
            verseNum: "3",
            text: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves,",
            indent: 0
        },
        {
            verseNum: "4",
            text: "not looking to your own interests but each of you to the interests of the others.",
            indent: 0
        },
        {
            verseNum: "5",
            text: "In your relationships with one another, have the same mindset as Christ Jesus:",
            indent: 0
        },
        {
            verseNum: "6",
            text: "Who, being in very nature God,",
            indent: 1
        },
        {
            verseNum: "7",
            text: "did not consider equality with God something to be used to his own advantage;",
            indent: 1
        },
        {
            verseNum: "8",
            text: "rather, he made himself nothing",
            indent: 1
        },
        {
            verseNum: "9",
            text: "by taking the very nature of a servant,",
            indent: 2
        },
        {
            verseNum: "10",
            text: "being made in human likeness.",
            indent: 2
        },
        {
            verseNum: "11",
            text: "And being found in appearance as a man,",
            indent: 1
        },
        {
            verseNum: "12",
            text: "he humbled himself",
            indent: 1
        },
        {
            verseNum: "13",
            text: "by becoming obedient to death—",
            indent: 2
        },
        {
            verseNum: "14",
            text: "even death on a cross!",
            indent: 2
        },
        {
            verseNum: "15",
            text: "Therefore God exalted him to the highest place",
            indent: 1
        },
        {
            verseNum: "16",
            text: "and gave him the name that is above every name,",
            indent: 1
        },
        {
            verseNum: "17",
            text: "that at the name of Jesus every knee should bow,",
            indent: 1
        },
        {
            verseNum: "18",
            text: "in heaven and on earth and under the earth,",
            indent: 2
        },
        {
            verseNum: "19",
            text: "and every tongue acknowledge that Jesus Christ is Lord,",
            indent: 2
        },
        {
            verseNum: "20",
            text: "to the glory of God the Father.",
            indent: 2
        }
    ]
};

// Word alternatives for semantic matching
// Each word (7+ characters) has 2 alternative words in similar semantic range
const WORD_ALTERNATIVES = {
    "encouragement": ["support", "motivation", "inspiration"],
    "united": ["joined", "connected", "bonded"],
    "comfort": ["solace", "consolation", "relief"],
    "common": ["shared", "mutual", "collective"],
    "sharing": ["fellowship", "communion", "participation"],
    "tenderness": ["gentleness", "kindness", "compassion"],
    "compassion": ["empathy", "sympathy", "mercy"],
    "complete": ["fulfilled", "satisfied", "finished"],
    "like-minded": ["aligned", "unified", "harmonious"],
    "selfish": ["self-centered", "egocentric", "narcissistic"],
    "ambition": ["aspiration", "drive", "pursuit"],
    "conceit": ["arrogance", "vanity", "pride"],
    "humility": ["modesty", "meekness", "lowliness"],
    "interests": ["concerns", "priorities", "matters"],
    "relationships": ["connections", "associations", "interactions"],
    "mindset": ["attitude", "perspective", "outlook"],
    "nature": ["essence", "character", "being"],
    "equality": ["equivalence", "parity", "sameness"],
    "advantage": ["benefit", "gain", "privilege"],
    "nothing": ["emptiness", "void", "nothingness"],
    "servant": ["helper", "attendant", "minister"],
    "likeness": ["resemblance", "similarity", "image"],
    "appearance": ["look", "form", "semblance"],
    "humbled": ["lowered", "abased", "diminished"],
    "obedient": ["compliant", "submissive", "dutiful"],
    "exalted": ["elevated", "raised", "promoted"],
    "highest": ["supreme", "topmost", "greatest"],
    "acknowledge": ["recognize", "admit", "confess"],
    "glory": ["honor", "splendor", "majesty"]
};

// Function to get alternatives for a word
function getAlternatives(word) {
    if (WORD_ALTERNATIVES[word.toLowerCase()]) {
        return WORD_ALTERNATIVES[word.toLowerCase()];
    }
    // Fallback if word not found
    return ["option1", "option2", "option3"];
}

// Function to extract all words 7+ characters from the text
function extractLongWords() {
    const longWords = new Set();
    BIBLE_DATA.passages.forEach(passage => {
        const words = passage.text.match(/\b\w+\b/g) || [];
        words.forEach(word => {
            if (word.length >= 7) {
                longWords.add(word.toLowerCase());
            }
        });
    });
    return Array.from(longWords);
}

// Function to get blanked words for a difficulty level
function getBlankedWords(difficulty) {
    const allLongWords = extractLongWords();
    const percentages = {
        easy: 0.25,
        medium: 0.50,
        hard: 0.75
    };
    
    const percentage = percentages[difficulty] || 0.50;
    const numToBlanked = Math.ceil(allLongWords.length * percentage);
    
    // Shuffle and select random words
    const shuffled = allLongWords.sort(() => Math.random() - 0.5);
    return new Set(shuffled.slice(0, numToBlanked).map(w => w.toLowerCase()));
}
