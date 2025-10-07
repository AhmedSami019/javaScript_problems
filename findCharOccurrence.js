const text = 'A quick brown fox jumps over the lazy dog';
let count = 0;
let letter = 'o'

for (let i = 0; i < text.length; i++){
    const char = text[i].toLocaleLowerCase();
    if(char === letter){
        count++;
    }
}
console.log(count);