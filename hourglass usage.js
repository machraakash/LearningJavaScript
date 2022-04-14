import Hourglass from "./script.js";

const greenHourglass = new Hourglass(
  200,
  100,
  100,
  "green",
  "bottom",
  "25 December 2020"
);

console.log(
  "The hourglass values before changing the position property are: ",
  greenHourglass
);

greenHourglass.position = greenHourglass.hourglassPosition("top");

console.log("After changing position:", greenHourglass.position);

const RightNow = new Date();
console.log("the purchase date of houglass is: ", greenHourglass.date_acquired);
console.log(
  "Days since hourglass was acquired is: ",
  greenHourglass.hourglassAge(),
  "Days"
);

console.log("The day now is:", RightNow.getDay());
