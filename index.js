const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (num) {
  return function(fare) {return fare * num}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (driversArr, selection) {
  return selection(driversArr)
}