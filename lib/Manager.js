const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeId) {
        super(name, id, email);
        this.officeId = officeId;
    }
    getOfficeId() {
        return this.officeId;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;