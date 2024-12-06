// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  // Example:
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  // Example:
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Example:
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']));

const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };
  
  // Example:
  const fareQuadrupler = createFareMultiplier(4);
  console.log(fareQuadrupler(5));

 
  const fareDoubler = createFareMultiplier(2);
    
    //example usage
    console.log(fareDoubler(10));

    const fareTripler = createFareMultiplier(3);

        console.log(fareTripler(10));

        

        const selectDifferentDrivers = function (drivers, selectFunction) {
            return selectFunction(drivers);
          };
          
          // Example:
          console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));
          
          
          console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));
          
          


  