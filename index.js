// Access inquirer 
const inquirer = require('inquirer');

// Access fileSystem
const fs = require('fs');

//Import generateMarkdown.js
const generateMarkdown = require('./Assets/Utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub username:',
        default: 'username',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Enter repository name:',
        default: 'repo-name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
        default: 'my-project',
    },
    {
        type: 'input',
        name: 'demo',
        message: 'Insert pathway to demo gif/ image/ video/ link:',
        default: 'demo',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project:',
        default: 'Insert app description here.'
    },
    {
        type: 'input',
        name: 'deployed-link',
        message: 'Deployed link:',
        default: 'Insert deployed link here.'
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'Technlogies used for project: (please seperate each one with a comma)',
        default: 'Insert technologies used here'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license', 
        choices: [
            'APACHE license 2.0',
            'GNU General Public License v3.0',
            'MIT',
            'Unlicensed'
        ],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can you use this application?',
        default: 'Insert app usage here.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can you install this application?',
        default: 'Insert installation requirements here.'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter any testing instructions you would like to provide for this project:',
        default: 'Use Unit Testing with Jest.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List contributors: (please seperate by commas)',
        default: 'Insert contributors here.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Contribution guidelines:',
        default: 'For information on how to contribute, please follow the guidlelines listed in [Contributor Covenant](https://www.contributor-covenant.org/) '
    },
];

// Function to write README file
function writeToFile(fileName, data) {
//fs return
   return fs.writeFile(fileName, data, (err) =>
   err ? console.log(err) : console.log('Successfully created README file!'))
};

// Initialise the app
function init() {
    console.log(`-------------------------------------
    THE PROFESSIONAL README GENERATOR.
    
    Please input the README information at the prompts to create your projects README.md
-------------------------------------`);
    inquirer.prompt(questions)
    .then((answers) => {
        let title = `${answers.title}.md`
        writeToFile(title, generateMarkdown(answers))
    })
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();