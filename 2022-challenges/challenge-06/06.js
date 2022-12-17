function createCube(size) {
  const faceUp = "\\_";
  const faceDown = "_/";
  const faceSideUp = "/\\";
  const faceSideDown = "\\/";
  let cubeInText = "";
  const iterationToPaintCube = size * 2;
  for (let index = 1; index <= iterationToPaintCube; index++) {
    if (index <= size) {
      cubeInText =
        cubeInText +
        " ".repeat(size - index) +
        faceSideUp.repeat(index) +
        "_" +
        faceUp.repeat(size - 1) +
        "\\\n";
    } else {
      cubeInText =
        cubeInText +
        " ".repeat(index - size - 1) +
        faceSideDown.repeat(iterationToPaintCube - index + 1) +
        faceDown.repeat(size) +
        `${index === iterationToPaintCube ? "" : "\n"}`;
    }
  }
  return cubeInText;
}

console.log(createCube(1));
console.log(createCube(2));
console.log(createCube(3));
console.log(createCube(4));
console.log(createCube(5));
