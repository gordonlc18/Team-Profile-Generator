// dependencies
const Employee = require('./employee');

// create engineer class and extend on employee class
class Engineer  extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github
    }
   
    getRole() {
        return this.role
    }
}
// export engineer class
module.exports = Engineer;