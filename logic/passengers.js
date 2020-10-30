function Passengers() {
  function checkFlightCapacity(capacity, passArr) {
    passArr = passArr.reduce((acc, el) => acc+=el, 0);

    if (passArr < capacity) return passArr;
    if (passArr > capacity) throw new Error("Error");
  }

    function distributeAllSeatsToAllPassengers(vip, reg, flights, busSeats, econSeats) {
      let vipWbusSeats = 0, vipWeconSeats = 0, regWbusSeats = 0, regWeconSeats = 0;
      
      let vbMin = Math.min(vip, busSeats);
      let veMin = Math.min(vip, econSeats);

      let rbMin = Math.min(reg, busSeats);
      let reMin = Math.min(reg, econSeats);

      while (vbMin > 0) {
        vipWbusSeats += vbMin;
        vip -= vbMin;
        busSeats -= vbMin;
      }

      while (veMin > 0) {
        vipWeconSeats += veMin;
        vip -= veMin;
        econSeats -= veMin;
      }

      while (rbMin > 0) {
        regWbusSeats += rbMin;
        reg -= rbMin;
        busSeats -= rbMin;
      }

      while (reMin > 0) {
        regWeconSeats += reMin;
        reg -= reMin;
        econSeats -= reMin;
      }

      return {
        vipWbusSeats,
        vipWeconSeats,
        regWbusSeats,
        regWeconSeats
      }
    }

  return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();