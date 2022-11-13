'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AnswerOptions', [{
      QuestionId: 0987,
      OptionTest: "A, B, C, D"
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AnswerOptions', null, {});
  }
};
