export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  const res = numbers
    .map((number, index) => {
      for (let i = 0; i < numbers.length; i++) {
        if (number + numbers[i] === result && index !== i) {
          return `${number}${numbers[i]}`;
        }
      }
    })
    .filter((value) => value != undefined);

  return res.length > 0 ? [parseInt(res[0][0]), parseInt(res[0][1])] : null;
}
