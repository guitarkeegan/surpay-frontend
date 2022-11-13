'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answer', [{
      QuestionId: 0987,
      AnswerData: "I loved tbhis product"
    }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Answer', null, {});
  }
};
