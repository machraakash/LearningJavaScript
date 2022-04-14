import Library from "./Books_Class.js";

const TFA = new Library("The Four Agreements", "Miguel Ruiz", 168, "Read");
const TCOMC = new Library(
  "The Count of Monte Cristo",
  "Alexander Dumas",
  1276,
  "Read"
);
const TCITR = new Library(
  "The Catcher in the Rye",
  "J.D. Salinger",
  277,
  "Read"
);
const AHOTS = new Library(
  "A History of the Sikhs: Vol. 1 (1469-1839)",
  "Khushwant Singh",
  407,
  "Want to Read"
);
const WIDNLAI = new Library(
  "What I did Not Learn at IIT: Transitioning from Campus to Workplace",
  "Rajeev Agarwal",
  214,
  "Currently Reading"
);
console.log("The first book is: ", TFA);
console.log("The second book is: ", TCOMC);
console.log("The third book is: ", TCITR);
console.log("The fourth book is: ", AHOTS);
console.log("The fifth book is: ", WIDNLAI);

TCITR.shelf = TCITR.libraryShelf("Read but Forgotten");

console.log("The new shelf for The Catcher in the rye is: ", TCITR.shelf);
console.log("Hence, the new description of the third book is: " ,TCITR)
