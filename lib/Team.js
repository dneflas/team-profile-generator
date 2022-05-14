const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-site');

function Team() {
    this.manager;
    this.engineers = [];
    this.interns = [];
};

Team.prototype.selectManager = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
            validate: managerNameInput => {
                if(managerNameInput){
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's ID number?",
            validate: managerIdInput => {
                if(managerIdInput){
                    return true;
                } else {
                    console.log("Please enter the manager's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's ID email address?",
            validate: managerEmailInput => {
                if(managerEmailInput){
                    return true;
                } else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the manager's office number?",
            validate: managerOfficeNumberInput => {
                if(managerOfficeNumberInput){
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(({ managerName, managerId, managerEmail, managerOfficeNumber}) => {
        this.manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        this.addAnotherMember();
    });
};

Team.prototype.selectTeamMembers = function () {
    inquirer.prompt({
        type: 'list',
        name: 'employeeType',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern']
    })
    .then(({ employeeType }) => {
        if (employeeType === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is the engineer's name?",
                    validate: engineerNameInput => {
                        if(engineerNameInput){
                            return true;
                        } else {
                            console.log("Please enter the engineer's name!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is the engineer's ID number?",
                    validate: engineerIdInput => {
                        if(engineerIdInput){
                            return true;
                        } else {
                            console.log("Please enter the engineer's ID!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the engineer's ID email address?",
                    validate: engineerEmailInput => {
                        if(engineerEmailInput){
                            return true;
                        } else {
                            console.log("Please enter the engineer's email!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is the engineer's Github username?",
                    validate: engineerGithubInput => {
                        if(engineerGithubInput){
                            return true;
                        } else {
                            console.log("Please enter the engineer's Github username!");
                            return false;
                        }
                    }
                }
            ])
            .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
                this.engineers.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));
                
                this.addAnotherMember();
            })
        } else if (employeeType === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is the intern's name?",
                    validate: internNameInput => {
                        if(internNameInput){
                            return true;
                        } else {
                            console.log("Please enter the intern's name!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is the intern's ID number?",
                    validate: internIdInput => {
                        if(internIdInput){
                            return true;
                        } else {
                            console.log("Please enter the intern's ID!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is the intern's ID email address?",
                    validate: internEmailInput => {
                        if(internEmailInput){
                            return true;
                        } else {
                            console.log("Please enter the intern's email!");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "What is the name of the intern's school?",
                    validate: internSchoolInput => {
                        if(internSchoolInput){
                            return true;
                        } else {
                            console.log("Please enter the intern's school!");
                            return false;
                        }
                    }
                }

            ])
            .then(({ internName, internId, internEmail, internSchool }) => {
                this.interns.push(new Intern(internName, internId, internEmail, internSchool));

                this.addAnotherMember();
            });
        }
    })
}

Team.prototype.addAnotherMember = function(){
    inquirer.prompt({
        type: 'confirm',
        name: 'addAnotherMember',
        message: 'Would you like to add another team member?',
        default: false
    })
    .then((addMemberInput) => {
        if(addMemberInput.addAnotherMember){
            this.selectTeamMembers();
        }
        return generatePage(this);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(copyFile)
    .catch(err => {
     console.log(err)    
    })
};

module.exports = Team;