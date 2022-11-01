function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!

  if (ids.length > 1) {
    const reindeersSorted = ids.sort((a, b) => a - b);
    const findReinderLost = reindeersSorted.find(
      (reinder, index) => reindeersSorted[index + 1] - reinder != 1
    );
    return findReinderLost + 1;
  }

  return ids[0] === 0 ? ids[0] + 1 : ids[0] - 1;
}

console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)
console.log(missingReindeer([1])); // -> 1 (¡es el último el que falta!)
