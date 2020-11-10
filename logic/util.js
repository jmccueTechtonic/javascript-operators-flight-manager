"use strick"
function Util() {

  function calculateTotalDistributedPassengers(distributedPassengers) {
      let totalDistributedPassengers = 0;
      let value;
      for (value in distributedPassengers) {
         totalDistributedPassengers += distributedPassengers[value];
      }
         return totalDistributedPassengers;
   }

   function calculateTotalNumberOfPassengers(passengersArray) {
      let totalNumberOfPassengers = 0;
      let passengers;
      for (passengers of passengersArray) {
         totalNumberOfPassengers += passengers;
      }
      return totalNumberOfPassengers;
   }

   function checkInput(input) {
      if (!input || !Number.isInteger(input)) {
         throw new Error("Error");
      }
   }

   function calculateTotalDistance(distanceArr) {
      return distanceArr.filter(el => el >= 0).reduce((acc, cur) => acc+=cur, 0);
   }

   function calculateBonusPoints(business, economy, businessBonus, economyBonus) {
      const businessPoints = calculateTotalDistance(business);
      const economyPoints = calculateTotalDistance(economy);
      return (businessPoints * businessBonus)/100 + (economyPoints * economyBonus)/100;
   }

   return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};

}

module.exports = Util();