// Philippians 2:1-18 NIV - Bible Memorization Data
// Text formatted with verse numbers and proper indentation

const BIBLE_DATA = {
    passages: [
        {
            verseNum: "1",
            text: "Therefore if you have any encouragement from being united with Christ, if any comfort from his love, if any common sharing in the Spirit, if any tenderness and compassion, 2 then make my joy complete by being like-minded, having the same love, being one in spirit and of one mind. 3 Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, 4 not looking to your own interests but each of you to the interests of the others.",
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
            indent: 0
        },
        {
            verseNum: "",
            text: "did not consider equality with God something to be used to his own advantage;",
            indent: 1
        },
        {
            verseNum: "7",
            text: "rather, he made himself nothing",
            indent: 0
        },
        {
            verseNum: "",
            text: "by taking the very nature of a servant,",
            indent: 1
        },
        {
            verseNum: "",
            text: "being made in human likeness.",
            indent: 1
        },
        {
            verseNum: "8",
            text: "And being found in appearance as a man,",
            indent: 0
        },
        {
            verseNum: "",
            text: "he humbled himself",
            indent: 1
        },
        {
            verseNum: "",
            text: "by becoming obedient to death—",
            indent: 1
        },
        {
            verseNum: "",
            text: "even death on a cross!",
            indent: 2
        },
        {
            verseNum: "9",
            text: "Therefore God exalted him to the highest place",
            indent: 0
        },
        {
            verseNum: "",
            text: "and gave him the name that is above every name,",
            indent: 1
        },
        {
            verseNum: "10",
            text: "that at the name of Jesus every knee should bow,",
            indent: 0
        },
        {
            verseNum: "",
            text: "in heaven and on earth and under the earth,",
            indent: 1
        },
        {
            verseNum: "11",
            text: "and every tongue acknowledge that Jesus Christ is Lord,",
            indent: 0
        },
        {
            verseNum: "",
            text: "to the glory of God the Father.",
            indent: 1
        },
        {
            verseNum: "12",
            text: "Therefore, my dear friends, as you have always obeyed—not only in my presence, but now much more in my absence—continue to work out your salvation with fear and trembling, 13 for it is God who works in you to will and to act in order to fulfill his good purpose.",
            indent: 0
        },
        {
            verseNum: "14",
            text: "Do everything without grumbling or arguing, 15 so that you may become blameless and pure, \"children of God without fault in a warped and crooked generation.\" Then you will shine among them like stars in the sky 16 as you hold firmly to the word of life. And then I will be able to boast on the day of Christ that I did not run or labor in vain. 17 But even if I am being poured out like a drink offering on the sacrifice and service coming from your faith, I am glad and rejoice with all of you. 18 So you too should be glad and rejoice with me.",
            indent: 0
        }
    ]
};

// Word alternatives for semantic matching
// Each word (7+ characters) has 2-3 alternative words in similar semantic range
const WORD_ALTERNATIVES = {
    "absence": ["lack", "missing", "nonexistence"],
    "acknowledge": ["recognize", "admit", "confess"],
    "advantage": ["benefit", "gain", "privilege"],
    "ambition": ["aspiration", "drive", "pursuit"],
    "another": ["other", "different", "next"],
    "appearance": ["look", "form", "semblance"],
    "arguing": ["disputing", "quarreling", "debating"],
    "becoming": ["turning", "growing", "developing"],
    "blameless": ["faultless", "innocent", "spotless"],
    "comfort": ["solace", "consolation", "relief"],
    "compassion": ["empathy", "sympathy", "mercy"],
    "complete": ["fulfilled", "satisfied", "finished"],
    "conceit": ["arrogance", "vanity", "pride"],
    "consider": ["think", "regard", "view"],
    "continue": ["proceed", "persist", "keep going"],
    "encouragement": ["support", "motivation", "inspiration"],
    "equality": ["equivalence", "parity", "sameness"],
    "everything": ["all things", "anything", "all"],
    "exalted": ["elevated", "raised", "promoted"],
    "friends": ["companions", "allies", "associates"],
    "fulfill": ["complete", "accomplish", "achieve"],
    "grumbling": ["complaining", "murmuring", "groaning"],
    "highest": ["supreme", "topmost", "greatest"],
    "himself": ["self", "oneself", "person"],
    "humbled": ["lowered", "abased", "diminished"],
    "humility": ["modesty", "meekness", "lowliness"],
    "interests": ["concerns", "priorities", "matters"],
    "likeness": ["resemblance", "similarity", "image"],
    "looking": ["watching", "seeing", "gazing"],
    "mindset": ["attitude", "perspective", "outlook"],
    "nothing": ["emptiness", "void", "nothingness"],
    "obedient": ["compliant", "submissive", "dutiful"],
    "presence": ["company", "existence", "attendance"],
    "purpose": ["goal", "aim", "intention"],
    "relationships": ["connections", "associations", "interactions"],
    "salvation": ["deliverance", "redemption", "rescue"],
    "selfish": ["self-centered", "egocentric", "narcissistic"],
    "servant": ["helper", "attendant", "minister"],
    "sharing": ["fellowship", "communion", "participation"],
    "something": ["anything", "whatever", "thing"],
    "tenderness": ["gentleness", "kindness", "compassion"],
    "therefore": ["thus", "consequently", "so"],
    "trembling": ["shaking", "quivering", "fear"],
    "without": ["lacking", "devoid of", "minus"],
    "yourselves": ["themselves", "each other", "one another"]
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
