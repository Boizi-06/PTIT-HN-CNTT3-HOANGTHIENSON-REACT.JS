let str: string = "hello world";
let result: string = "";
let chars: string[] = [];

for (let i = 0; i < str.length; i++) {
  const ch = str[i];

  if (ch === undefined) continue; 

  let isExist: boolean = false;

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
