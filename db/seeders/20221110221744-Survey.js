'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Survey', [{
       name: 'Vito Corleone',
       numberOfTakersDesired: 20,
       totalPayout: 1,
       companyId: 1028,
       surveyIsFunded: True
     }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Survey', null, {});

  }
};
