import { withSessionRoute } from "../../../../lib/withSession"
import { Company } from "../../../../db/models/"

export default withSessionRoute(updateCompanyRoute)

async function updateCompanyRoute(req, res) {
    if (req.method !== "PUT") {
        return res.status(400).json({ message: "Must be a put request" })
    }

    const { password } = req.body

    try {
        await Company.update(
            { password: password },
            {
                where: {
                    id: req.session.distributor.id,
                },
                individualHooks: true,
            }
        )
        res.status(200).json({message: "Password was updated!"})
    } catch (err) {
        res.status(400).json({message: "Password not long enough"})
        console.log(err)
    }
    
}
