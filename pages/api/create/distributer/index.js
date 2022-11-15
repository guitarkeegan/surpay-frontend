import {Company} from "../../../../db/models"

export default async function handler(req, res) {
    const { name, email, password } = req.body

    try {
        const companyData = await Company.create({
          name,
          email,
          password
        });
    
        // req.session.save(() => {
        //   req.session.loggedIn = true;
        //   req.session.user_id = dbUserData.id;}

        const companyId = companyData.id
        res.status(200).json({cid: companyId});

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }