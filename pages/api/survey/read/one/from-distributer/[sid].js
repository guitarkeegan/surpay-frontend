import {Company, Survey} from "../../../../../../db/models"

export default async function handler(req, res){
    // check for 'get' request
    if (req.method !== "GET"){
        res.status(400).json({message: "Must be a get request"})
    }

    // get the survey id from the url
    const urlArr = (req.url).split("/")
    const surveyPk = parseInt(urlArr[urlArr.length - 1])
    console.log(surveyPk)

    try{

        // check if req.session.user.id is == the company_id
        // found in surveyData

        //pk method not working
    const surveyData = await Survey.findByPk(surveyPk)
    console.log(surveyData)

    res.status(200).json(surveyData)

    } catch (e) {
        console.error(e)
        res.status(400).json({message: "There was a problem getting the survey"})
    }
}