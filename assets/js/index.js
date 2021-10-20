// Access inquirer 
const inquirer = require('inquirer');

// Access fileSystem
const fs = require('fs');

// Generate README.md file
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// how to create multiple answers 
// how to create default settings (e.g. if user presses enter, then use MIT license, generic how to contribute etc.. )

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose a license', 
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How can you use this application?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How can you install this application?',
      },
      {
        type: 'input',
        name: 'issues',
        message: 'How can you report issues?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'How can you make a contribution?',
      },
    ]);
  };


//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });