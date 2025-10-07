const sentence = "I am a good person also a supercalifragilisticexpialidocious person";

const words = sentence.split(/\s+/);
console.log(words);

let longestWord = "";

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.length > longestWord.length) {
    {
      longestWord = word;
    }
  }
}
console.log(longestWord);