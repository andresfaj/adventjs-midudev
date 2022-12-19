function getGiftsToRefill(a1, a2, a3) {
  const allGifts = [...a1, ...a2, ...a3];

  const giftsToBuy = allGifts.reduce((preValue, currentValue, index) => {
    if (index < a1.length) {
      return Object.assign(preValue, { [currentValue]: 1 });
    } else if (index >= a1.length && index < a1.length + a2.length) {
      return Object.assign(preValue, {
        [currentValue]:
          preValue[currentValue] && a1.includes(currentValue) ? 2 : 1,
      });
    } else {
      return Object.assign(preValue, {
        [currentValue]:
          preValue[currentValue] &&
          (a1.includes(currentValue) || a2.includes(currentValue))
            ? 2
            : 1,
      });
    }
  }, {});

  const giftsToBuyFilteredKeys = Object.keys(giftsToBuy);
  const giftsToBuyFiltered = giftsToBuyFilteredKeys.filter(
    (gift) => giftsToBuy[gift] === 1
  );

  return giftsToBuyFiltered;
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche", "muñeca"];
const a3 = ["bici", "pc", "pc"];

console.log(getGiftsToRefill(a1, a2, a3));
