function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!

  if (gifts.length === 0) {
    return [];
  } else {
    const itemPackingGifts = "*";
    const lengthOfGiftsArray = (gifts[0].length / 2) * 2 + 2;

    const giftsArray = gifts.map((gift) => `*${gift}*`);
    giftsArray.unshift(itemPackingGifts.repeat(lengthOfGiftsArray));
    giftsArray.push(itemPackingGifts.repeat(lengthOfGiftsArray));

    return giftsArray;
  }
}

console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
