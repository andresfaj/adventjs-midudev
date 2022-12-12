function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  let changeAux = change;
  const coinsAvailabe = [1, 2, 5, 10, 20, 50];
  const coinsToReturn = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  for (let index = coinsAvailabe.length - 1; index >= 0; index--) {
    const currentCoin = coinsAvailabe[index];
    // console.log({ changeAux, currentCoin });
    if (changeAux > currentCoin) {
      let division = changeAux / currentCoin;
      let residuoByTwo = changeAux % currentCoin;
      if (residuoByTwo === 0) {
        coinsToReturn[`${index}`] = division;
        changeAux = changeAux - currentCoin * division;
      } else {
        coinsToReturn[`${index}`] = parseInt(division);
        changeAux = changeAux - currentCoin * parseInt(division);
      }
    }

    if (changeAux === currentCoin) {
      coinsToReturn[`${index}`] = 1;
      changeAux = changeAux - currentCoin;
    }
  }

  return Object.values(coinsToReturn);
}

// console.log(getCoins(51));
// console.log(getCoins(3));
// console.log(getCoins(5));
// console.log(getCoins(16));
console.log(getCoins(100));
