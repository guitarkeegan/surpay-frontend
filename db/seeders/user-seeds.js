const User = require("../models/User");

const userData = [
    {
        address: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", // account 19 hardhat
        password: "password123"
    },
    {
        address: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", // account 17 hardhat
        password: "password123"
    }
]

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;