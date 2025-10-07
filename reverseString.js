const string  = 'supercalifragilisticexpialidocious'

let reverseString = '';

for(let i = 0; i < string.length; i++){
    reverseString = string[i] + reverseString
}
console.log(reverseString);