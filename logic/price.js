"use strick"
function Prices() {
  function calculateFinalPrice(base, passenger, flight) {
    let price = base;
    price *= 1 + passenger / 100;
    price *= 1 + flight / 100;
    return price.toFixed(2);

  }
  function calculateDefaultFinalPrice(price, pass, fli) {
    pass = pass.toLowerCase();
    fli = fli.toLowerCase();
    let completePrice = price;
    

    if (pass === 'regular') {
      completePrice = (completePrice * .95);
    } else {
      completePrice =  (completePrice * 1.05);
    }

    if (fli === 'economy') {
      completePrice = completePrice - (completePrice * .03);
    } else {
      completePrice = completePrice + (completePrice * .1);
    }

    return completePrice.toFixed(2);
  }

  function calculateTotalFinalPrice(numSeats, passType, flightType, basePrice) {
    return numSeats * calculateDefaultFinalPrice(basePrice, passType,flightType);
  }

  return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}
module.exports = Prices();