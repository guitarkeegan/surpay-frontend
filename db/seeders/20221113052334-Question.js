'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Question', [{
      SurveyId: 20909,
      QuestionText: "What do you think of this product"
    }], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Question', null, {});
  }
};
