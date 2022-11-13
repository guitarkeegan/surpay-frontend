// bring in seeders
const seedAnswers = require("./answer-seeds");
const seedQuestions = require("./question-seeds");
const seedSurveys = require("./survey-seeds");
const seedUsers = require("./user-seeds");
const seedCompanies = require("./company-seeds");

const sequelize = require('../connection');
const { resolve } = require("styled-jsx/css");

async function seedAll(){
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCompanies();
    console.log('\n----- COMPANIES SEEDED -----\n');
    await seedSurveys();
    console.log('\n----- SURVEYS SEEDED -----\n');
    await seedQuestions();
    console.log('\n----- QUESTIONS SEEDED -----\n');
    await seedAnswers();
    console.log('\n----- ANSWERS SEEDED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
}

seedAll()
.then(()=>{
    console.log("Seeds completed!!");
    process.exit(0);
}   
)
.catch((e)=>{
    console.error(e);
    process.exit(1);
})