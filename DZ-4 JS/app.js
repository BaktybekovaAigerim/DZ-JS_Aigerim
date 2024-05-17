
function capitalizeString(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return capitalized;
}

console.log(capitalizeString("АЙГЕРИМ"));
console.log(capitalizeString("бАКТЫБЕКОВА"));

function charCount(str, char) {
    const lowerCaseStr = str.toLowerCase();
    const lowerCaseChar = char.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr.charAt(i) === lowerCaseChar) {
            count++;
        }
    }

    return count;
}

console.log(charCount("Abrakadabra", "a"));
console.log(charCount("hello", "z"));


