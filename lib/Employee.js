// TODO: Write code to define and export the Employee class

// Creating employee class to export to html page

class Employee 
{
    constructor(name, id, email) 
    {
        this.name = name;
        this.role = "Employee";
        this.id = id;
        this.email = email;
    }

    getName() 
    {
        return this.name;
    }

    getId() 
    {
        return this.id;
    }

    getEmail() 
    {
        return this.email;
    }

    getRole() 
    {
        return this.role;
    }
}

module.exports = Employee;


