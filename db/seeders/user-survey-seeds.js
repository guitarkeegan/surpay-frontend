const UserSurvey = require("../models/UserSurvey")

const userSurveyData = [
    {
        user_id: 1,
        survey_id: 2
    }
]

const seedThroughTable = () => UserSurvey.bulkCreate(userSurveyData, {
    individualHooks: true,
    returning: true,
})

module.exports = seedThroughTable