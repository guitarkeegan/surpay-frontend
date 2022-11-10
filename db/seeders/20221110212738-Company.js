'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Company', [{
       name: 'Chainlink',
       email: 'chain@link.com',
       password: 'password123'
     }], {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('company', null, {});
  }
};
