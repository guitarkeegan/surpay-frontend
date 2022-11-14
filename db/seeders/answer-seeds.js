const Answer = require("../models/Answer");

const answerData = [
  {
    question_id: 1,
    answer_text: "It definitly deserves every prize",
    times_selected: 0
  },
  {
    question_id: 1,
    answer_text: "It is almost too good to be possible!",
    times_selected: 0
  },
  {
    question_id: 1,
    answer_text: "If got made a Chainlink Hackathon project...",
    times_selected: 0
  },
  {
    question_id: 1,
    answer_text: "I feel that I need to give this team all of the crypto",
    times_selected: 0
  },
  {
    question_id: 2,
    answer_text: "Zero by the looks of things..",
    times_selected: 0
  },
  {
    question_id: 2,
    answer_text: "More than it is now",
    times_selected: 0
  },
  {
    question_id: 2,
    answer_text: "As high as the moon!",
    times_selected: 0
  },
  {
    question_id: 2,
    answer_text: "Bitcoin will be accepted throughout the galaxy",
    times_selected: 0
  },
  {
    question_id: 3,
    answer_text: "Of course!",
    times_selected: 0
  },
  {
    question_id: 3,
    answer_text: "Not by the looks of things..",
    times_selected: 0
  },
  {
    question_id: 3,
    answer_text: "It will be worth more than it is now.",
    times_selected: 0
  },
  {
    question_id: 3,
    answer_text: "The dollar will be accepted throughout the galaxy",
    times_selected: 0
  },
  {
    question_id: 4,
    answer_text: "Somewhat likely",
    times_selected: 0
  },
  {
    question_id: 4,
    answer_text: "Very likely",
    times_selected: 0
  },
  {
    question_id: 4,
    answer_text: "I'm already in!",
    times_selected: 0
  },
  {
    question_id: 4,
    answer_text: "Let's put it this way, I don't have a bank account",
    times_selected: 0
  },
]

const seedAnswers = () => Answer.bulkCreate(answerData);
module.exports = seedAnswers;