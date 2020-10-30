function Flights() {
    function calculateNumberOfFlights (passengers, capacity) {
        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
            throw new Error("The number of passengers must be a positive integer value")
        }

        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {
            throw new Error("The capacity of the flight must be a positive integer value")
        }
        let ratio = passengers / capacity;
        console.log(ratio);
       if (passengers % capacity === 0) {
        return ratio;
       } else {
        return Math.floor(ratio) + 1;
       }
    }

    function checkAircraftRevision(limit, distanceArr) {
        distanceArr = distanceArr.reduce((acc, el) => acc+=el, 0);

        if (distanceArr <= limit/2) {
            return "The revision needs to be done within the next 3 months";
        } else if (distanceArr > limit/2 && distanceArr <= limit*.75) {
            return "The revision needs to be done within the next 2 months";
        } else if (distanceArr > limit*.75 && distanceArr <= limit) {
            return "The revision needs to be done within the next month";
        } else if (distanceArr > limit) throw new Error("Error");
    }
    return {calculateNumberOfFlights, checkAircraftRevision}; 
}
module.exports = Flights();