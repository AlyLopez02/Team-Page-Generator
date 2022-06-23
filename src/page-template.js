const Manager = require("../lib/manager");

function generateHTML(teamMembers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">

    <title>Team Page</title>

    <script src="https://kit.fontawesome.com/0ad641d2c3.js" crossorigin="anonymous"></script>

  </head>
  <body>
    <header class="container-fluid p-5 mb-2 bg-primary text-white">
        <h1 class="text-center">Your Team's Page!</h1>
    </header>

    <main>
        <div class="d-flex flex-wrap align-items-center justify-content-around m-5 p5 text-center">

          ${createTeamTemplate(teamMembers)}

        </div>
    </main>

  </body>
  </html>
  `

}

// Function to create team template
function createTeamTemplate(teamMembers) {
  const teamTemplateArray = [];

  // Manager


  const managersArray = teamMembers.filter(function (obj) {
    return obj.getRole() == 'Manager';
  })

  const managersTemplateString = managersArray.map((manager) => generateManagerCard(manager)).join('\n \n')

  teamTemplateArray.push(managersTemplateString);

  // Engineer
  const engineersArray = teamMembers.filter(function (obj) {
    return obj.getRole() == 'Engineer';
  })

  const engineersTemplateString = engineersArray.map((engineers) => generateEngineerCard(engineers)).join('\n \n')

  teamTemplateArray.push(engineersTemplateString);

  // Intern
  const internsArray = teamMembers.filter(function (obj) {
    return obj.getRole() == 'Intern';
  })

  const internsTemplateString = internsArray.map((intern) => generateInternCard(intern)).join('\n \n')

  teamTemplateArray.push(internsTemplateString);

  // Making teamTemplates array into a string

  const teamTemplateString = teamTemplateArray.join('\n \n');

  return teamTemplateString;

};

// Functions to generate employee cards
function generateManagerCard(manager) {
  return `
    <div class="card m-2" style="width: 18rem;">
      <div class="card-header">
        <h4>${manager.getName()}</h4>
        <h5>${manager.getRole()} <span><i class="fa-solid fa-mug-saucer"></i></span></h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
    `
}

function generateEngineerCard(engineer) {
  return `
    <div class="card m-2" style="width: 18rem;">
      <div class="card-header">
        <h4>${engineer.getName()}</h4>
        <h5>${engineer.getRole()} <span><i class="fa-solid fa-glasses"></i></span></h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
      </ul>
    </div>
    `
}

function generateInternCard(intern) {
  return `
    <div class="card m-2" style="width: 18rem;">
      <div class="card-header">
        <h4>${intern.getName()}</h4>
        <h5>${intern.getRole()} <span><i class="fa-solid fa-graduation-cap"></i></span></h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
    `
}


module.exports = generateHTML;