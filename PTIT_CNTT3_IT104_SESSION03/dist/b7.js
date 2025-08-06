"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "hello world";
let result = "";
let chars = [];
for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === undefined)
        continue;
    let isExist = false;
    for (let j = 0; j < chars.length; j++) {
        if (chars[j] === ch) {
            isExist = true;
            break;
        }
    }
    if (!isExist) {
        result += ch;
        chars.push(ch);
    }
}
console.log("Chuỗi sau khi lọc:", result);
//# sourceMappingURL=b7.js.map