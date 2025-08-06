"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUnique(word) {
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char && word.indexOf(char) !== word.lastIndexOf(char)) {
            return false;
        }
    }
    return true;
}
function findLongestUniqueWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (const word of words) {
        if (isUnique(word) && word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
// Test
const input = "hello world apple banana orange pumpkin cucumber";
const result = findLongestUniqueWord(input);
console.log("Từ dài nhất không có ký tự trùng:", result);
//# sourceMappingURL=b10.js.map