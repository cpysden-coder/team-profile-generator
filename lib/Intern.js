const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.role = "Intern";
      this.school = school;
    }
  
    getSchool() {
      console.log(this.school);
      return this.school;
    }
  
    // getRole() {
    //   console.log("Intern");
    //   return this.role = "Intern";
    // }
  };

  module.exports=Intern;