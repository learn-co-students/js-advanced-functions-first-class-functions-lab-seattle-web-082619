const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function (value) {
    return value * multiplier
  }
}

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, cb) {
  return cb(drivers)
}
