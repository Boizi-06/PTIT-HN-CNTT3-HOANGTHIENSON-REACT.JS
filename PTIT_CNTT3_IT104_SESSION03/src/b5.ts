let firstName: string = "hoang";
let lastName: string = "son";

function capitalize(word: string): string {
  const firstChar = word[0];
  if (firstChar === undefined) return "";
  return firstChar.toUpperCase() + word.slice(1);
}

firstName = capitalize(firstName);
lastName = capitalize(lastName);

let fullName: string = `${firstName} ${lastName}`;
console.log(fullName); // Hoang Son
