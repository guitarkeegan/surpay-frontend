const Question = require("../models/Question")

const questionData = [
  {
    survey_id: 1,
    question_text: "What do you think of this project?"
  },
  {
    survey_id: 1,
    question_text: "What will Bitcoin be worth in the year 2030?"
  },
  {
    survey_id: 1,
    question_text: "Will the dollar still exist in 2030?"
  },
  {
    survey_id: 1,
    question_text: "How likely are you to invest in crypto projects?"
  }
]

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;