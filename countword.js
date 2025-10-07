const text = "A quick brown fox jumps over the lazy dog"

let wordCount = 0;



for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char !== " " && (i === 0 || text[i - 1] === " ")) {
        wordCount++;
    }
    }
console.log(wordCount);