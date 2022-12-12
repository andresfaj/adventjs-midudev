function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  //if(times * priceTicket <= priceCardFidelity){
  //return false;
  //} else {

  const priceIndividualTicket = 12;
  const discount = 0.75;
  const valueOnlyWithTickets = times * priceIndividualTicket;
  let valueToPayWithCard = 250;
  for (let counter = 1; counter <= times; counter++) {
    valueToPayWithCard =
      valueToPayWithCard + priceIndividualTicket * Math.pow(discount, counter);
  }

  return valueToPayWithCard > valueOnlyWithTickets ? false : true;
}

console.log(shouldBuyFidelity(1));
console.log(shouldBuyFidelity(3));
