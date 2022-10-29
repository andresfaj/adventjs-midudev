function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!

  let priceToBuy = 0;
  let priceToSell = 0;

  for (let index = 0; index < prices.length; index++) {
    const currentPrice = prices[index];
    const nextPrice = prices[index + 1];
    if (currentPrice < nextPrice) {
      priceToBuy =
        priceToBuy < currentPrice && priceToBuy ? priceToBuy : currentPrice;
      priceToSell = priceToSell < nextPrice ? nextPrice : priceToSell;
    }
  }

  return priceToSell - priceToBuy || -1;
}

console.log(maxProfit([39, 18, 29, 25, 34, 32, 5]));
console.log(maxProfit([10, 20, 30, 40, 50, 60, 70]));
console.log(maxProfit([18, 15, 12, 11, 9, 7]));
console.log(maxProfit([3, 3, 3, 3, 3]));
