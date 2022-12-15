function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const giftsCitiesOrdered = [...giftsCities].sort((a, b) => -(a - b));
  console.log({ giftsCitiesOrdered });
  if (maxCities === 1) {
    return (
      giftsCitiesOrdered.find(
        (giftByCity) => parseInt(maxGifts / giftByCity) > 0
      ) || 0
    );
  } else {
    let maxCurrentGifts = maxGifts;
    for (let index = 0; index < maxCities; index++) {
      if (maxCurrentGifts === 0) return maxGifts;
      const element = array[index];
    }
  }
}

console.log(getMaxGifts([50], 15, 1));
console.log(getMaxGifts([50], 100, 1));
console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3));
