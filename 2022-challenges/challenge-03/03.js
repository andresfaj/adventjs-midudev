function distributeGifts(packOfGifts, reindeers) {
  const weightBoxOfGifts = packOfGifts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.length,
    0
  );
  const maxWeigthReindeers =
    reindeers.reduce(
      (prevValue, currentValue) => prevValue + currentValue.length,
      0
    ) * 2;
  const maxBoxOfGiftsToGive = parseInt(maxWeigthReindeers / weightBoxOfGifts);
  return maxBoxOfGiftsToGive;
}
const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];
console.log(distributeGifts(packOfGifts, reindeers)); // 2
