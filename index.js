const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return (fareMultiplier) => {
    return integer * fareMultiplier;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray, fxn) {
  return fxn(driversArray);
}
