const sentence = "those are 2 person of 10. also 3 dogs and 5 cats I get"; 
let digitCount = 0;

const digits = '0123456789';

for(let i = 0; i < sentence.length; i++){
    const char = sentence[i];
    if(digits.includes(char)){
        digitCount++
    }
}
console.log(digitCount);
