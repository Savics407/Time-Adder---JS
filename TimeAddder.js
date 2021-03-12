/* 
  
Create a function called "timeAdder" that can add two time values together. For example, it should be able to add 25 hours and 3 days together. 

The function should accept 4 parameters:

value1, label1, value2, label2

- value1 and value2 should accept positive integers  

- label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

For example your function may be called in any of the following ways:

timeAdder(1,"minute",3,"minutes")

timeAdder(5,"days",25,"hours")

timeAdder(1,"minute",240,"seconds")


Requirements:

TODO: 1. Your function should include at least one switch

2. Your function must accept any possible combination of inputs 

3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:

return [5,"minutes"]; 

The exact label you choose to return for label3 ("minutes" for example) is up to you.

4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:

timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural

timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types

timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type
  */

const isInteger = (value) => !isNaN(value) && value >= 0; // making the integer to accept only number values greater than 0

//An array of declared variables
const labelsListed = [
  "seconds",
  "minutes",
  "hours",
  "days",
  "second",
  "minute",
  "hour",
  "day",
];

const validLabel = (label) => labelsListed.indexOf(label) !== -1; // What this does is to make sure that label is not outside the scope of the array [labelsListed]

const isValidLabel = (value, label) => {
  switch (label) {
    case "second":
    case "minute":
    case "hour":
    case "day":
      return value === 1 ? true : false;
    case "seconds":
    case "minutes":
    case "hours":
    case "days":
      return value === 1 ? false : true;
    default:
      console.log(`The label is not recognized`);
      return false;
  }
};

// Setting the Units of time in seconds equivalence

const minute = 60;
const hour = minute * 60;
const day = hour * 24;

const convertToSeconds = (value, label) => {
  switch (label) {
    case "second":
    case "seconds":
      return value;
    case "minute":
    case "minutes":
      return value * minute;
    case "hour":
    case "hours":
      return value * hour;
    case "day":
    case "days":
      return value * day;
    default:
      console.log("Can't convert to seconds");
  }
};

const convertToOtherTimeUnits = (seconds) => {
  if (seconds % day === 0) {
    const days = seconds / day;
    return days === 1 ? [days, "day"] : [days, "days"];
  } else if (seconds % hour === 0) {
    const hours = seconds / hour;
    return hours === 1 ? [hours, "hour"] : [hours, "hours"];
  } else if (seconds % minute === 0) {
    const minutes = seconds / minute;
    return minutes === 1 ? [minutes, "minute"] : [minutes, "minutes"];
  } else {
    return seconds === 1 ? [seconds, "second"] : [seconds, "seconds"];
  }
};

const timeAdder = (value1, label1, value2, label2) => {
  if (!isInteger(value1)) {
    return false;
  }
  if (!isInteger(value2)) {
    return false;
  }

  if (!validLabel(label1)) {
    return false;
  }
  if (!validLabel(label2)) {
    return false;
  }

  if (!isValidLabel(value1, label1)) {
    return false;
  }

  if (!isValidLabel(value2, label2)) {
    return false;
  }

  const seconds1 = convertToSeconds(value1, label1);
  const seconds2 = convertToSeconds(value2, label2);

  const result = seconds1 + seconds2;

  return convertToOtherTimeUnits(result);
};

console.log(timeAdder(5, "minutes", 60, "seconds"));
