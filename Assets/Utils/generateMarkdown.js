// TODO: Create a function that returns a license badge based on which license is passed in

// Get License Badge
// TODO: If there is no liecnse, return an empty string
function renderLicenseBadge(license) {
    const licenseBadge = {
      MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      "APACHE license 2.0": `[![License: APACHE](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
    return licenseBadge[license];
};

function rednerLicenseSection(license){
    const licenseSection = {
        MIT: `Copyright (c) [2021] [${answers.title}]
        Permission is herby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limiation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject following coditions: 
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MECHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OTHER DEALINGS IN THE SOFTWARE.`,
      "APACHE license 2.0": `Copyright (c) [2021] [${answers.title}]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      
          http://www.apache.org/licenses/LICENSE-2.0
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`,
      
      
    }
}

function technlogiesUsed(str){
    let output = '';
    let arr = str.split(",");
    for(i = 0; i < arr.length; i++){
        output += `-${arr[i]}<br>`
    }
    return output
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `<img alt="GitHub Followers" src="https://img.shields.io/github/followers/${answers.username}"> https://img.shields.io/github/license/${answers.username}/${answers.repo}<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/${answers.username}/${answers.repo}">  ${renderLicenseBadge(answers.license)}  <img alt="GitHub Commit Activity" src="https://img.shields.io/github/commit-activity/w/${answers.username}/${answers.repo}">

  # ${answers.title}
  ---

  ## Table of Content 
  
  * [Description](#description)
  * [Technlogies](#technologies)
  * [Contributions](#contributions)


  ![project-demo](${answers.demo})
  
  ## Description
  
  ${answers.description}
  
  link to the [app](${answers["deployed-link"]})
  
  ## Technologies
  
  ${technlogiesUsed(answers.technologies)}
  
  ## Usage
  
  ${answers.usage}
  
  ## Installation
  
  ${answers.installation}
  
  ## Testing
  
  ${answers.testing}
  
  ## Contributors
  ${answers.contributors}
  
  ## License
  
  ---
  
  ## Contributions
  ${answers.contribute}

  ## Questions 
  If you have any questions, contact me at ${answers.email}
  You can find more of my work [here](https://github.com/${answers.username})
  `
}

module.exports = generateMarkdown;
