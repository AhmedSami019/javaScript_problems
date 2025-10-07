const text = "A quick brown fox jumps over the lazy dog"

    // method 1

    let vowels = 0
    const sentence = text.toLowerCase()

    for (let i = 0; i < sentence.length; i++) {
        const element = sentence[i]
        if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
            vowels++
        }
    }
    console.log("the count of vowels are ", vowels);



    // method 2

    let vowelsCount = 0;
    const reference = ["a", "e", "i", "o", "u"]

    const strings = text.toLowerCase()

    for (let i = 0; i <= strings.length; i++) {
        const letter = strings[i];
        if (reference.includes(letter)) {
            vowelsCount++
        }
 
    }
    console.log(vowelsCount);
