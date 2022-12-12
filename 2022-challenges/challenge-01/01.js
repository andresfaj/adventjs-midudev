function wrapping(gifts) {
  const symbolGift = "*";
  return gifts.map(
    (gift) =>
      `${symbolGift.repeat(gift.length + 2)}\n*${gift}*\n${symbolGift.repeat(
        gift.length + 2
      )}`
  );
}

console.log(wrapping(["cat", "game", "socks"]));
