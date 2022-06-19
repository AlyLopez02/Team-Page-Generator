function generateHTML(){
    return ``

}

function generateManagerCard(){
    const managerCard =  `
    <div class="col-5 mt-2">
        <div class="card">
            <div class="card-header">  
            Manager <span><i class="fa-solid fa-mug-saucer"></i></span>
            </div>
            <div class="card-body">
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
    </div>
    `
}

function generateEngineerCard(){
    const engineerCard =  `
    <div class="col-5 mt-2">
        <div class="card">
            <div class="card-header">  
            Manager <span><i class="fa-solid fa-mug-saucer"></i></span>
            </div>
            <div class="card-body">
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
    </div>
    `
}

function generateInternCard(){
    const internCard =  `
    <div class="col-5 mt-2">
        <div class="card">
            <div class="card-header">  
            Manager <span><i class="fa-solid fa-mug-saucer"></i></span>
            </div>
            <div class="card-body">
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
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