import {User} from "../../../../db/models";
import { withSessionRoute } from "../../../../lib/withSession";

export default withSessionRoute(loginUser);

async function loginUser(req, res) {
    
    const {address, password} = req.body
    console.log(address)
    if (req.method !== "POST"){
        res.status(400).json({message: "Must be a post route"})
    }

    try {
        
        const userData = await User.findOne({
          where: {
            address: address,
          },
        });
        
    
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Address not found. Please try again!' });
          return;
        }
    
        const validPassword = userData.checkPassword(password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect password. Please try again!' });
          return;
        }

        const userId = userData.id

        // save session here
        req.session.user = {
          id: userId,
          address: userData.address,
        }
        await req.session.save()

        res.status(200).json({ userId })

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    };

    
