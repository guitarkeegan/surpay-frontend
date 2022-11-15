import {User} from "../../../../db/models"

export default async function handler(req, res) {
    const { address, email, password } = req.body

    try {
        const dbUserData = await User.create({
          address,
          email,
          password
        });
    
        // req.session.save(() => {
        //   req.session.loggedIn = true;
        //   req.session.user_id = dbUserData.id;}
        const userId = dbUserData.id
        res.status(200).json({uid: userId});

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }