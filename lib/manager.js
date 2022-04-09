// dependencies
const Employee = require('./employee');

// create manager class and extend on employee class
class Manager  extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber
    }
   
    getRole() {
        return this.role
    }
}
// export engineer class
module.exports = Manager;