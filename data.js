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
            verseNum: "6b",
            text: "did not consider equality with God something to be used to his own advantage;",
            indent: 1
        },
        {
            verseNum: "7",
            text: "rather, he made himself nothing",
            indent: 0
        },
        {
            verseNum: "7b",
            text: "by taking the very nature of a servant,",
            indent: 1
        },
        {
            verseNum: "7c",
            text: "being made in human likeness.",
            indent: 1
        },
        {
            verseNum: "8",
            text: "And being found in appearance as a man,",
            indent: 0
        },
        {
            verseNum: "8b",
            text: "he humbled himself",
            indent: 1
        },
        {
            verseNum: "8c",
            text: "by becoming obedient to death—",
            indent: 1
        },
        {
            verseNum: "8d",
            text: "even death on a cross!",
            indent: 2
        },
        {
            verseNum: "9",
            text: "Therefore God exalted him to the highest place",
            indent: 0
        },
        {
            verseNum: "9b",
            text: "and gave him the name that is above every name,",
            indent: 1
        },
        {
            verseNum: "10",
            text: "that at the name of Jesus every knee should bow,",
            indent: 0
        },
        {
            verseNum: "10b",
            text: "in heaven and on earth and under the earth,",
            indent: 1
        },
        {
            verseNum: "11",
            text: "and every tongue acknowledge that Jesus Christ is Lord,",
            indent: 0
        },
        {
            verseNum: "11b",
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
// Each word (7+ characters) has 2 alternative words in similar semantic range
const WORD_ALTERNATIVES = {
    "therefore": ["thus", "consequently", "so"],
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
    "glory": ["honor", "splendor", "majesty"],
    "consider": ["think", "regard", "view"],
    "something": ["anything", "whatever", "thing"],
    "becoming": ["turning", "growing", "becoming"],
    "yourself": ["oneself", "self", "person"],
    "yourselves": ["themselves", "each other", "one another"],
    "another": ["other", "different", "next"],
    "christ": ["messiah", "savior", "lord"],
    "jesus": ["christ", "lord", "savior"],
    "heaven": ["sky", "paradise", "above"],
    "tongue": ["language", "speech", "voice"],
    "father": ["parent", "creator", "god"],
    "rather": ["instead", "on the other hand", "but"],
    "himself": ["self", "oneself", "person"],
    "taking": ["accepting", "receiving", "taking"],
    "human": ["mortal", "person", "mankind"],
    "found": ["discovered", "located", "seen"],
    "becoming": ["turning", "growing", "becoming"],
    "death": ["passing", "end", "demise"],
    "cross": ["crucifixion", "stake", "gallows"],
    "every": ["all", "each", "any"],
    "should": ["must", "ought", "shall"],
    "under": ["below", "beneath", "underneath"],
    "earth": ["ground", "world", "soil"],
    "lord": ["master", "ruler", "god"],
    "being": ["existing", "living", "present"],
    "having": ["possessing", "holding", "owning"],
    "looking": ["watching", "seeing", "gazing"],
    "others": ["people", "persons", "individuals"],
    "above": ["over", "higher", "beyond"],
    "value": ["appreciate", "esteem", "prize"],
    "nothing": ["emptiness", "void", "zero"],
    "made": ["created", "formed", "built"],
    "found": ["discovered", "located", "seen"],
    "appear": ["seem", "look", "show"],
    "man": ["person", "human", "male"],
    "gave": ["granted", "bestowed", "presented"],
    "name": ["title", "designation", "label"],
    "every": ["all", "each", "any"],
    "knee": ["joint", "bend", "leg"],
    "bow": ["bend", "kneel", "stoop"],
    "tongue": ["language", "speech", "voice"],
    "lord": ["master", "ruler", "god"]
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
