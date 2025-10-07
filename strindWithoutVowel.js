let sentence = "hey there how are you right now"

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
console.log(!vowels);

for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if(vowels.includes(char)){
        sentence = sentence.replace(char, '');
        
    }
}
console.log(sentence);
