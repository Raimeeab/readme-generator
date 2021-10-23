// Access moment.js
const moment = require('moment');  

// Get current year for license
const year = moment().format('YYYY');

// Get License Badge
function renderLicenseBadge(license) {
    const licenseBadge = {
      "MIT License": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      "APACHE license 2.0": `[![License: APACHE](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
      "GNU General Public License v3.0": `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
      Unlicensed: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    };
    return licenseBadge[license];
};

// Get license link
function renderLicenseSection(license){
    const licenseSection = {
        MIT: `Permission is herby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limiation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject following coditions: 
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
        
        https://opensource.org/licenses/MIT
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MECHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OTHER DEALINGS IN THE SOFTWARE.`,
      "APACHE license 2.0": `Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      
        http://www.apache.org/licenses/LICENSE-2.0
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`,
      "GNU General Public License v3.0": `This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
      Unlicensed: `No license selected, default copyright laws apply.`
    };
  return licenseSection[license];  
}

// Convert comma breaks to bullet points 
function convertToBullet(str){
    let output = '';
    let arr = str.split(",");
    for(i = 0; i < arr.length; i++){
        output += `-${arr[i]}<br>`
    }
    return output
}

// Generate markdown for README.md file
function generateMarkdown(data) {
  return `
  <img alt="GitHub Followers" src="https://img.shields.io/github/followers/${data.username}"> <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/${data.username}/${data.repo}">  ${renderLicenseBadge(data.license)}  <img alt="GitHub Commit Activity" src="https://img.shields.io/github/commit-activity/w/${data.username}/${data.repo}">
  # ${data.title}
  ---

  ## Table of Content 
  
  * [Description](#description)
  * [Technlogies](#technologies)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Contributors](#contributors)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)
  
  ## Demo
  ![project-demo](${data.demo})
  
  ## Description
  
  ${data.description}
  
  link to the [app](${data["deployed-link"]})
  
  ## Technologies
  
  ${convertToBullet(data.technologies)}
  
  ## Usage
  
  ${data.usage}
  
  ## Installation
  
  ${data.installation}
  
  ## Testing
  
  ${data.testing}
  
  ## Contributors
  ${convertToBullet(data.contributors)}
  
  ## License
  ${data.license}<br>
  Copyright (c) [${year}] [${data.title}] <br>

  ${renderLicenseSection(data.license)}

  ---
  
  ## Contributions
  ${data.contribute}

  ## Questions 
  If you have any questions, contact me at ${data.email}. <br>
  You can find more of my work [here](https://github.com/${data.username}).
  `
}

module.exports = generateMarkdown;
