const countVowels = (str) => {
    let vowels = 0
    const sentence = str.toLowerCase()

    for (let i = 0; i < sentence.length; i++) {
        const element = str[i];
        console.log(element);
        if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
            vowels++
        }
    }
    console.log("the count of vowels are ", vowels);
}

const text = "A quick brown fox jumps over the lazy dog"
countVowels(text)