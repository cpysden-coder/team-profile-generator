//Set up dependencies
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managers = [];
const engineers = [];
const interns = [];

//ask Question function to prompt user for answers
function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "No more team members to add"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Add a Manager":
                console.log("add manager!")
                addManager();
                break;

            case "Add an Engineer":
                console.log("add an engineer")
                addEngineer();
                break;

            case "Add an Intern":
                console.log("add an intern!")
                addIntern();
                break;

            default:
                console.log("goodbye!")
                break;
        }
    })
}

askQuestion();
//working up to this point. Next step is to build addManager function. All tests for Employee, Manager, Engineer, and Intern.js are passing

//addManager function

function addManager() {
    inquirer.prompt([{
        name: "name",
        message: "What is your name?",
        type: "input"
    },
    {
        name: "id",
        message: "What is your id?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your email?",
        type: "input"
    },
    {
        name: "officeNumber",
        message: "What is your Office Number?",
        type: "input"
    },
    ]).then(({ name, id, email, officeNumber }) => {
        console.log(name);
        const mgr = new Manager(name, id, email, officeNumber);
        managers.push(mgr)
        console.log(managers);
        askQuestion();
    })
}

//addEngineer function
function addEngineer() {
    inquirer.prompt([{
        name: "name",
        message: "What is your name?",
        type: "input"
    },
    {
        name: "id",
        message: "What is your id?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your email?",
        type: "input"
    },
    {
        name: "github",
        message: "What is your Github user-name?",
        type: "input"
    },
    ]).then(({ name, id, email, github }) => {
        console.log(name);
        const eng = new Engineer(name, id, email, github);
        engineers.push(eng)
        console.log(engineers);
        askQuestion();
    })
}



//addIntern function
function addIntern() {
    inquirer.prompt([{
        name: "name",
        message: "What is your name?",
        type: "input"
    },
    {
        name: "id",
        message: "What is your id?",
        type: "input"
    },
    {
        name: "email",
        message: "What is your email?",
        type: "input"
    },
    {
        name: "school",
        message: "What is your current School?",
        type: "input"
    },
    ]).then(({ name, id, email, school }) => {
        console.log(name);
        const int = new Intern(name, id, email, school);
        interns.push(int)
        console.log(interns);
        askQuestion();
    })
}