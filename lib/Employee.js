// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = "Employee"
    }
    getName(name) {
        return this.name;
    }
    getId(name) {
        return this.id;
    }
    getEmail(name) {
        return this.email;
    }
    getRole(name) {
        return this.role;
    }
}

module.exports=Employee;