const Company = require("../models/Company");

const companyData = [
    {
        name: "Chainlink",
        email: "chain@link.io",
        password: "password123"
    }
]

const seedCompanies = () => Company.bulkCreate(companyData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedCompanies;