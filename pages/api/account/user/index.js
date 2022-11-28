import { withSessionRoute } from "../../../../lib/withSession";

export default withSessionRoute(userRoute);

async function userRoute(req, res) {
    res.send({ user: req.session.user });
}