// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Creating Engineer class to export to html page

const Employee = require("./Employee.js");

class Engineer extends Employee 
{
    constructor(name, id, email, gitHub) 
    {
        super(name, id, email);
        this.role = "Engineer";
        this.github = gitHub;
    }

    getGithub() 
    {
        return this.github;
    }
}

module.exports = Engineer;



