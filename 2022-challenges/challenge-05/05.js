function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const giftsCitiesOrdered = [...giftsCities].sort((a, b) => -(a - b));
  if (maxCities === 1) {
    return (
      giftsCitiesOrdered.find(
        (giftByCity) => parseInt(maxGifts / giftByCity) > 0
      ) || 0
    );
  }

  if (maxCities > 1) {
    let giftsForDelivery = maxGifts;
    let giftsDelivered = 0;
    let citiesVisited = maxCities;

    for (let index = 0; index < giftsCitiesOrdered.length; index++) {
      const currentGiftsByCity = giftsCitiesOrdered[index];

      if (giftsCitiesOrdered[giftsCitiesOrdered.length - 1] > maxGifts)
        return 0;

      if (currentGiftsByCity <= giftsForDelivery) {
        if (currentGiftsByCity === maxGifts) return maxGifts;

        giftsForDelivery = giftsForDelivery - currentGiftsByCity;
        giftsDelivered = giftsDelivered + currentGiftsByCity;
        citiesVisited = citiesVisited - 1;

        if (
          typeof giftsCitiesOrdered[index + 1] === "number" &&
          giftsForDelivery > giftsCitiesOrdered[index + 1] &&
          citiesVisited === 0
        ) {
          return giftsDelivered;
        }

        if (giftsCitiesOrdered.includes(giftsForDelivery)) return maxGifts;
      } else {
        if (
          citiesVisited < maxCities &&
          index < giftsCitiesOrdered.length - 1
        ) {
          giftsForDelivery = giftsForDelivery + currentGiftsByCity;
          giftsDelivered = giftsDelivered - currentGiftsByCity;
          citiesVisited = citiesVisited + 1;
        }
      }
    }
    return giftsDelivered;
  }
}

console.log(getMaxGifts([50], 15, 1)); //0
console.log(getMaxGifts([50], 100, 1)); //50
console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); //20
console.log(getMaxGifts([12, 3, 11, 5, 8], 20, 3)); //20
console.log(getMaxGifts([50, 70], 100, 1)); //70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)); // 115
