export function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (let character of stringOfCharacters) {
    if (character === findCharacter) {
      count++;
    }
  }
  return count;
}
