const word = "level"
let reverseWord = "";

for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    reverseWord = letter + reverseWord;    
}
if(word === reverseWord){
    console.log("palindrome");
}else{
    console.log("not a palindrome");
}
