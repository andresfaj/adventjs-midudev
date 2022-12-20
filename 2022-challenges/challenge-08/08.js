function checkPart(part) {
  const partInArray = [...part];
  const partReverse = [...partInArray].reverse().join("");

  if (partReverse === part) return true;

  for (let index = 0; index < partInArray.length; index++) {
    const newWordInArray = partInArray.filter(
      (word) => word != partInArray[index]
    );
    const newWordInString = newWordInArray.join("");
    const newWordReverse = newWordInArray.reverse().join("");
    if (newWordInString === newWordReverse) return true;
  }

  return false;
}

console.log(checkPart("uwu"));
console.log(checkPart("miidim"));
console.log(checkPart("midu"));
console.log(checkPart("lolol"));
console.log(checkPart("yolooloy"));
console.log(checkPart("zzzoonzzz"));
console.log(checkPart("asdf"));
