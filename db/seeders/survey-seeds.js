
const Survey = require("../models/Survey");

const surveyData = [
    {
        name: "State of Crypto",
        number_of_takers_desired: 20,
        total_payout: 1,
        company_id: 1,
        survey_is_funded: false,
    },
    {
        name: "Sample Completed Survey",
        number_of_takers_desired: 2,
        number_of_takers_fullfilled: 1,
        total_payout: 1,
        company_id: 1,
        survey_is_funded: true
    }
]

const seedSurveys = () => Survey.bulkCreate(surveyData, {onDelete: "CASCADE"});

module.exports = seedSurveys;