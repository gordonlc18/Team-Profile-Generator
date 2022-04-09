// dependencies
const Employee = require('./employee');

// create intern class and extend on employee class
class Intern  extends Employee {
    constructor (name, id, email,school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school
    }
    
    getRole() {
        return this.role
    }
   
}
// export intern class
module.exports = Intern;