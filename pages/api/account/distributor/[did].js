import { withSessionRoute } from "../../../../lib/withSession";

export default withSessionRoute(distributorRoute);

async function distributorRoute(req, res) {
    res.send({ distributor: req.session.distributor });
}