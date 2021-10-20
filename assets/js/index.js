// Access inquirer 
const inquirer = require('inquirer');

// Access fileSystem
const fs = require('fs');

// Generate README.md file
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username',
            default: 'username',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is your repository name',
            default: 'repo-name',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            default: 'My Project',
        },
        {
            type: 'input',
            name: 'demo',
            message: 'Insert pathway to demo gif/ image/ video:',
            default: 'Insert demo here',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project',
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
            message: 'What technlogies were used in this project? Please seperate each one with a comma',
            default: 'Insert technologies used here' // commas should go into bullet points 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license', 
            choices: [ // how to create multiple answers?
                'Apache license 2.0',
			    'GNU General Public License v3.0',
			    'MIT',
			    'BSD 2-clause "Simplified" license',
			    'BSD 3-clause "New" or "Revised" license',
			    'Boost Software License 1.0',
			    'Creative Commons Zero v1.0 Universal',
			    'Eclipse Public License 2.0',
			    'GNU Affero General Public License v3.0',
			    'GNU General Public License v2.0',
			    'GNU Lesser General Public License v2.1',
			    'Mozilla Public License 2.0',
			    'The Unlicense'
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
            name: 'issues',
            message: 'How can you report issues?',
            default: 'Issues cannot be reported yet.'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List contributors: (please seperate by commas)',
            default: 'Insert contributors here.' //commas should become breaklines 
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Contribution guidelines:',
            default: 'For information on how to contribute, please follow the guidlelines listed in [Contributor Covenant](https://www.contributor-covenant.org/) '
        },
    ]);
};

const generateReadme = (answers) => {
    `
    <img alt="GitHub followers" src="https://img.shields.io/github/followers/${answers.username}?style=social"><img alt="GitHub language count" src="https://img.shields.io/github/languages/count/${answers.username}/${answers.repo}?style=social"><img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/${answers.username}/${answers.repo}?style=social">
    # ${answers.name}
    ---
    ![project-demo](${answers.demo})
    
    ## Description
    
    ${answers.description}
    
    link to the [app](${answers.deployed-link})
    
    ## Technologies used 
    
    - ${answers.technologies}
    
    ## Usage
    
    ${answers.usage}
    
    ## Contributors
    ${answers.contributors}

    ## License
    ${answers.license} 
    ---
    
    ## How to Contribute
    ${answers.contribute}
    `
}


const init = () => {
    console.log(`-------------------------------------
    THE PROFESSIONAL README GENERATOR.
    
    Please input the README information at the prompts to create your projects README.md
-------------------------------------`);
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
  init()