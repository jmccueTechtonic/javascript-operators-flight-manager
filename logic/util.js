
function Util() {
  function calculateTotalDistributedPassengers(distributedPassengers) {
    return Object.values(distributedPassengers).reduce((acc, el) => acc+el, 0);
  }

  function calculateTotalNumberOfPassengers(passArr) {
    return passArr.reduce((acc, el) => acc+=el, 0);
  }

  return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}
module.exports = Util();
