// generate manager
const generateManager = manager => {
    return`<div class="card col bg-light mx-3 my-4 pb-4" style="max-width: 18rem;">
    <h3 class="card-header bg-light">
        ${manager.getName()}
        <br>
        ${manager.getRole()}
    </h3>
    <ul class="list-group">
        <li class="list-group-item bg-white">ID: ${manager.getId()}</li>
        <li class="list-group-item bg white">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item bg-white">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>    
</div>
    `
};


// generate engineer(s)
const generateEngineer = engineers => {
    if(engineers.length === 0){
        return '';
    }
    engineers.map( engineer => {
        return `<div class="card col bg-light mx-3 my-4 pb-4" style="max-width: 18rem;">
        <h3 class="card-header bg-light">
            ${engineer.getName()}
            <br>
            ${engineer.getRole()}
        </h3>
        <ul class="list-group">
            <li class="list-group-item bg-white">ID: ${engineer.getId()}</li>
            <li class="list-group-item bg white">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item bg-white">Github: <a target="_blank"href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>    
    </div>`
    });
};


// generate intern(s)
const generateIntern = interns => {
    if (interns.length === 0) {
        return '';
    }
    interns.map(intern => {
        return`<h3 class="card-header bg-light">
                ${intern.getName()}
                <br>
                ${intern.getRole()}
            </h3>
            <ul class="list-group">
                <li class="list-group-item bg-white">ID: ${intern.getId()}</li>
                <li class="list-group-item bg white">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item bg-white">School: ${intern.getSchool()}</li>
            </ul>    
        </div>`
    })
};

//generate page
const generatePage = teamObj => {
    const { manager, engineers, interns } = teamObj;
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./src/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <h1 class="text-center">My Team</h1>
        <div class="row justify-content-center">
            ${generateManager(manager)}
            ${generateEngineer(engineers)}
            ${generateIntern(interns)}
        </div>
        
    </body>
    </html>
    `
};

module.exports = generatePage;