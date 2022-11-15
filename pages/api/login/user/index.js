import {User} from "../../../../db/models"

export default async function handler(req, res) {
    
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

        res.status(200).json({ userId })

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    };

    
