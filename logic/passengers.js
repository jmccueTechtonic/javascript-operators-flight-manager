// function Passengers() {
//   function checkFlightCapacity(capacity, passArr) {
//     passArr = passArr.reduce((acc, el) => acc+=el, 0);

//     if (passArr < capacity) return passArr;
//     if (passArr > capacity) throw new Error("Error");
//   }

//     // function distributeAllSeatsToAllPassengers(vip, reg, flights, busSeats, econSeats) {
//     //   // busSeats *= flights;
//     //   // econSeats *= flights;
//     //   let vipWbusSeats = 0;
//     //   let vipWeconSeats = 0;
//     //   let regWbusSeats = 0; 
//     //   let regWeconSeats = 0;
      
//     //   let vbMin = Math.min(vip, busSeats);
//     //   let veMin = Math.min(vip, econSeats);

//     //   let rbMin = Math.min(reg, busSeats);
//     //   let reMin = Math.min(reg, econSeats);

//     //   while (vip > 0 && busSeats > 0) {
//     //     vipWbusSeats += vbMin;
//     //     vip -= vbMin;
//     //     busSeats -= vbMin;
//     //   }

//     //   while (vip > 0 && econSeats > 0) {
//     //     vipWeconSeats += veMin;
//     //     vip -= veMin;
//     //     econSeats -= veMin;
//     //   }

//     //   while (reg > 0 && busSeats > 0) {
//     //     regWbusSeats += rbMin;
//     //     reg -= rbMin;
//     //     busSeats -= rbMin;
//     //   }

//     //   while (reg > 0 && econSeats > 0) {
//     //     regWeconSeats += reMin;
//     //     reg -= reMin;
//     //     econSeats -= reMin;
//     //   }

//     //   return {
//     //     seat1: vipWbusSeats,
//     //     seat2: vipWeconSeats,
//     //     seat3: regWbusSeats,
//     //     seat4: regWeconSeats
//     //   }
//     // }
//     function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, 
//       businessSeatsPerFlight, economySeatsPerFlight) {
      
//       let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0, 
//       regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
//       let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
//       let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

//       var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
//       vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

//       var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:availableEconomySeats};
//       vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

//       var regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
//       regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

//       var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
//       regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

//       return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
//               vipPassengersWithEconomySeats:vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
//               regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
//   }

//   return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
// }

// module.exports = Passengers();


function Passengers() {

  function checkFlightCapacity(flightCapacity, passengersArray) {
      let passengersNumber = 0;
      let passengers;
      for(passengers of passengersArray) {
          passengersNumber += passengers;
      }
      if (passengersNumber > flightCapacity) {
          throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
      }
      return passengersNumber;
   }

   function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, 
      businessSeatsPerFlight, economySeatsPerFlight) {
      
      let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0, 
      regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
      let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
      let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

      var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
      vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

      var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:availableEconomySeats};
      vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

      var regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
      regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

      var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
      regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

      return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
              vipPassengersWithEconomySeats:vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
              regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
  }

  function updateConfiguration(configuration, seatsPerFlight) {
      let passengersWithSeats = 0;
      while (configuration.passengers > 0) {
          if (configuration.seats > 0) {
             if (configuration.passengers >= configuration.seats) {

                  if (configuration.seats > configuration.seatsPerFlight) {
                      configuration.passengers -= seatsPerFlight;
                      configuration.seats -= seatsPerFlight;
                      passengersWithSeats += seatsPerFlight;
                  } else {
                      configuration.passengers -= configuration.seats;
                      passengersWithSeats += configuration.seats;
                      configuration.seats = 0;
                  }
             } else {
                  passengersWithSeats += configuration.passengers;
                  configuration.seats -= configuration.passengers;
                  configuration.passengers = 0;
             }
          } else {
             break;
          }
      }
      return passengersWithSeats;
  }

   return {checkFlightCapacity, distributeAllSeatsToAllPassengers};

}

module.exports = Passengers();