const UserSurvey = require("../models/UserSurvey")

const userSurveyData = [
    {
        survey_id: 2,
        user_id: 1,
    }
]

const seedThroughTable = () => UserSurvey.bulkCreate(userSurveyData, {
    individualHooks: true,
    returning: true,
})

module.exports = seedThroughTable