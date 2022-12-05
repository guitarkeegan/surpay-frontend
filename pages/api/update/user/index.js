import { withSessionRoute } from "../../../../lib/withSession"
import { User } from "../../../../db/models/"

export default withSessionRoute(updateUserRoute)

async function updateUserRoute(req, res) {
    if (req.method !== "PUT") {
        return res.status(400).json({ message: "Must be a put request" })
    }

    const { password } = req.body

    try {
        await User.update(
            { password: password },
            {
                where: {
                    id: req.session.user.id,
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
