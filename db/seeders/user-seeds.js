const User = require("../models/User");

const userData = [
    {
        address: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", // account 19 locally
        password: "password123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;