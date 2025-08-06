"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "hoang";
let lastName = "son";
function capitalize(word) {
    const firstChar = word[0];
    if (firstChar === undefined)
        return "";
    return firstChar.toUpperCase() + word.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Hoang Son
//# sourceMappingURL=b5.js.map