// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributors](#Contributors)
  -[Test](#Test)
  -[Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  If you have any questions, please contact ${data.username} at ${data.email}.

`;
}

module.exports = generateMarkdown;
