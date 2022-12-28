import { Survey, Company, Question, Answer } from "../../../../../../../db/models";
import { withSessionRoute } from "../../../../../../../lib/withSession";

export default withSessionRoute(toUpdateSurveyRoute);

async function toUpdateSurveyRoute(req, res) {

    if (req.method !== "GET") {
        res.status(400).json({ message: "Must be a get request" });
    }
    
    const {sid} = req.query
    console.log("surveyPk: " + sid)
    
    try {
        const surveyData = await Survey.findByPk(sid, {
            include: {
                model: Question,
                include: {
                    model: Answer
                }
            
            }
        });
        console.log(surveyData);
    
        res.status(200).json(surveyData);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: "There was a problem getting the survey" });
    }
}