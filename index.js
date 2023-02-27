const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const template = require('./src/generateHTML');

// Create information for Engineer, Intern, Manager
function promptEngineer(team) {
    inquirer.prompt([
        {
            name: "name",
            message: "Engineer's name:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add name.';
            }
        },
        {
            name: "id",
            message: "Engineer's ID:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add ID.';
            }
        },
        {
            name: "email",
            message: "Engineer's email:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add an email.';
            }
        },
        {
            name: "github",
            message: "Engineer's GitHub:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add GitHub username.';
            }
        },
    ]).then((engineerDetails) => {
        const engineer = new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.github);
        team.push(engineer);
        generateTeam(team); 
    });
}


function promptIntern(team) {
    inquirer.prompt([
        {
            name: "name",
            message: "Intern's name:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add name.';
            }
        },
        {
            name: "id",
            message: "Intern's ID:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add ID.';
            }
        },
        {
            name: "email",
            message: "Intern's email:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add an email.';
            }
        },
        {
            name: "school",
            message: "Intern's school:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add school.';
            }
        },
    ]).then((internDetails) => {
        const intern = new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school)
        team.push(intern);
        generateTeam(team);
    });
}


function promptManager(team) {
    inquirer.prompt([
        {
            name: "name",
            message: "Manager's name:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add name.';
            }
        },
        {
            name: "id",
            message: "Mananger's ID:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add ID.';
            }
        },
        {
            name: "email",
            message: "Manager's email:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add an email.';
            }
        },
        {
            name: "officeNumber",
            message: "Manager's office number:",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'Add office number';
            }
        },
    ]).then((managerDetails) => {
        const manager = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber)
        team.push(manager);
        generateTeam(team); 
    });
}


function generateTeam(team) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Add a team member:',
            choices: [
                'Engineer',
                'Intern',
                "Finished",
            ],
        }
    ]).then((choice) => {
        if (choice.memberChoice === 'Engineer') {
            promptEngineer(team);
        } else if (choice.memberChoice === 'Intern') {
            promptIntern(team);
        } else {
            const html = template(team);
            fs.writeFile('./index.html', html, (err) => {
                if (err) {
                    console.log('Failed to write HTML file');
                }
            });
        }
    });
}

function start() {
    const team = [];
    promptManager(team);
}

start();