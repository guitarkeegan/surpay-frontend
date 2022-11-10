'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('User', [{
       name: 'Patrick Collins',
       address: '0x4A489FB4b98C31D0050084bFbAb872A6960DAcd2',
       password: 'password',
       email: 'patrick@collins.com'
     }], {});
    
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('user', null, {});
  }
};
