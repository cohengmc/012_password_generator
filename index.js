let lowercaseAlphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let alphabetUpperCase = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let specialCharacters = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
];

let characters = [lowercaseAlphabet, alphabetUpperCase, numbersArray, specialCharacters]

let passwordEl = document.querySelector("#password")

function generate() {
    let pass = ""
    let randomType = 0
    let max = 0

    for (let i = 0; i < 20; i++) {
        randomType = Math.floor(Math.random() * 4)
        if (randomType === 0) {
            max = lowercaseAlphabet.length
        } else if (randomType === 1) {
            max = alphabetUpperCase.length
        } else if (randomType === 2) {
            max = numbersArray.length
        } else {
            max = specialCharacters.length
        }

        let randomChar = Math.floor(Math.random() * max)

        pass += characters[randomType][randomChar]
    }

    passwordEl.textContent = pass
}