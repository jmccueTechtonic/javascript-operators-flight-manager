function Passengers() {
  function checkFlightCapacity(capacity, passArr) {
    passArr = passArr.reduce((acc, el) => acc+=el, 0);

    if (passArr < capacity) return passArr;
    if (passArr > capacity) throw new Error("Error");
  }

    function distributeAllSeatsToAllPassengers(vip, reg, flights, busSeats, econSeats) {
      busSeats *= flights;
      econSeats *= flights;
      let vipWbusSeats = 0;
      let vipWeconSeats = 0;
      let regWbusSeats = 0; 
      let regWeconSeats = 0;
      
      let vbMin = Math.min(vip, busSeats);

      while (vip > 0 && busSeats > 0) {
        vipWbusSeats += vbMin;
        vip -= vbMin;
        busSeats -= vbMin;
      }

      let veMin = Math.min(vip, econSeats);

      while (vip > 0 && econSeats > 0) {
        vipWeconSeats += veMin;
        vip -= veMin;
        econSeats -= veMin;
      }

      let rbMin = Math.min(reg, busSeats);

      while (reg > 0 && busSeats > 0) {
        regWbusSeats += rbMin;
        reg -= rbMin;
        busSeats -= rbMin;
      }

      let reMin = Math.min(reg, econSeats);

      while (reg > 0 && econSeats > 0) {
        regWeconSeats += reMin;
        reg -= reMin;
        econSeats -= reMin;
      }
      

      let obj = {
        vipPassengersWithBusinessSeats: vipWbusSeats,
        vipPassengersWithEconomySeats: vipWeconSeats,
        regularPassengersWithBusinessSeats: regWbusSeats,
        regularPassengersWithEconomySeats: regWeconSeats
      }
      return obj
    }

  return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();