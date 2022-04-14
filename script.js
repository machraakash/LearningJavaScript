/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Hourglass {
  //Defining the parameters

  constructor(height, width, weight, sandcolor, position, date_acquired) {
    //defining the properties
    this.height = height;
    this.width = width;
    this.weight = weight;
    this.sandcolor = sandcolor;
    this.position = position;
    this.date_acquired = date_acquired;
  }
  //Adding Methods
  hourglassPosition(currentposition) {
    this.position = currentposition;
    return this.position;
  }
  hourglassAge() {
    let now = new Date();
    let acquired = new Date(this.date_acquired);
    let elapsed = now - acquired;
    let hourglassDaysElapsed = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    return hourglassDaysElapsed;
  }
}
export default Hourglass;
