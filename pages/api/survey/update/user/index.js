import { Survey, UserSurvey, Answer } from "../../../../../db/models"
import sequelize from "../../../../../db/connection"
import { Op } from "sequelize"
import { withSessionRoute } from "../../../../../lib/withSession"
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import {abi, contractAddresses} from "../../../../../lib/contract"
import { ethers } from "ethers"

export default withSessionRoute(submitSurveyRoute);

async function submitSurveyRoute(req, res) {
    if (req.method !== "PUT"){
        return res.status(400).json({message: "Must be a PUT request"})
    }

    // const chainId = "31337" // hardhat hardcoded

    // const provider = new ethers.providers.JsonRpcProvider(process.env.MUMBAI_RPC_URL, chainId);
    // const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
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
