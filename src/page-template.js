function generateHTML() {
    return ``

}

// Function to create team template
function createTeamTemplate(teamMembers) {
  const teamTemplates = [];

  const managersArray = teamMembers.filter(obj => {
    return obj.role === 'Manager';
  })

  
};

// Functions to generate employee cards
function generateManagerCard() {
    const managerCard = `
    <div class="card m-2" style="width: 18rem;">
    <div class="card-header">
      <h4>${}</h4>
      <h5>Manager <span><i class="fa-solid fa-mug-saucer"></i></span></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${}</li>
      <li class="list-group-item">Id: ${}</li>
      <li class="list-group-item">Email: <a href="${}">${}</a></li>
      <li class="list-group-item">Office Number: ${}</li>
    </ul>
</div>
    `
}

function generateEngineerCard() {
    const engineerCard = `
    <div class="card m-2" style="width: 18rem;">
    <div class="card-header">
      <h4>${}</h4>
      <h5>Engineer <span><i class="fa-solid fa-glasses"></i></span></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${}</li>
      <li class="list-group-item">Id: ${}</li>
      <li class="list-group-item">Email: <a href="${}">${}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${}">${}</a></li>
    </ul>
</div>
    `
}

function generateInternCard() {
    const internCard = `
    <div class="card m-2" style="width: 18rem;">
    <div class="card-header">
      <h4>${}</h4>
      <h5>Intern <span><i class="fa-solid fa-graduation-cap"></i></span></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${}</li>
      <li class="list-group-item">Id: ${}</li>
      <li class="list-group-item">Email: <a href="${}">${}</a></li>
      <li class="list-group-item">School: ${}</li>
    </ul>
</div>
    `
}















// What Michael did
`<div class="card employee-card" style="width: 18rem;">
<div class="card-header">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div>
`


module.exports = generateHTML;