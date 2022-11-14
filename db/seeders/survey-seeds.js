
const Survey = require("../models/Survey");

const surveyData = [
    {
        name: "State of Crypto",
        number_of_takers_desired: 20,
        total_payout: 1,
        company_id: 1,
        survey_is_funded: false,
    },
]

const seedSurveys = () => Survey.bulkCreate(surveyData);

module.exports = seedSurveys;