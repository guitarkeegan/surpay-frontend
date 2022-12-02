import { Survey, UserSurvey, Answer } from "../../../../../db/models"
import sequelize from "../../../../../db/connection"
import { Op } from "sequelize"
import { withSessionRoute } from "../../../../../lib/withSession"

export default withSessionRoute(submitSurveyRoute);

async function submitSurveyRoute(req, res) {
    if (req.method !== "PUT"){
        return res.status(400).json({message: "Must be a PUT request"})
    }
    /* ---------------- MOCK USER ------------------*/
    const mockUserId = 1 // req.session.user.id
    const mockUserOneAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
    const mockUserTwoAddress = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"
    const { survey_id, answers } = req.body
    try {
        // update number_of_takers_fullfilled in survey
        const surveyData = await Survey.update(
            {
                number_of_takers_fullfilled: sequelize.literal("number_of_takers_fullfilled + 1"),
            },
            {
                where: { id: survey_id },
            }
        )
        console.log(surveyData)
        // update times_selected an answer
        const answerData = await Answer.update(
            {
                times_selected: sequelize.literal("times_selected + 1"),
            },
            {
                where: {
                    id: {
                        [Op.or]: answers,
                    },
                },
            }
        )
        console.log(answerData)

        // update UserSurvey table
        const userSurveyData = await UserSurvey.create({
            survey_id: survey_id,
            user_id: req.session.user.id
        })
        console.log(userSurveyData)

        //TODO: send transaction to contract

        res.status(200).json({ message: "working" })
    } catch (e) {
        console.error(e)
        res.status(400).json({ message: "Update user survey failed" })
    }
}
