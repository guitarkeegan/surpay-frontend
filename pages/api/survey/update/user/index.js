import { Survey, UserSurvey, Answer } from "../../../../../db/models"
import sequelize from "../../../../../db/connection"
import { Op } from "sequelize"
import { withSessionRoute } from "../../../../../lib/withSession"
// import Moralis  from 'moralis';
// import { EvmChain } from '@moralisweb3/evm-utils';
import {abi, contractAddresses} from "../../../../../constants"
import { ethers } from "ethers"

export default withSessionRoute(submitSurveyRoute);

async function submitSurveyRoute(req, res) {
    if (req.method !== "PUT"){
        return res.status(400).json({message: "Must be a PUT request"})
    }

    
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

        //TODO: send transaction to contract (locally)
        const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
        // console.log("provider... ", provider)
        const signer = provider.getSigner();
        // console.log("signer... ", signer)
        const contract = new ethers.Contract(contractAddresses["31337"], abi, signer);
        // console.log("contract.... ", contract)
        // console.log(req.session.user.address)
        console.log(req.session.user.address)
        const tx = await contract.sendUserSurveyData(survey_id.toString(), "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
        
        tx.wait(1)
        console.log(tx)

        res.status(200).json({ userId: req.session.user.id })
    } catch (e) {
        console.error(e)
        res.status(400).json({ message: "Update user survey failed" })
    }
}
