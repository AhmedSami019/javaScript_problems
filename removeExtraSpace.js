const text = "You are too   good    to be true.";


// method 1
// const result = text.trim().replace(/\s+/g, " ");

// method 2
const result = text.trim().split(/\s+/).join(" ");
console.log(result);
