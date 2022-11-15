import {Company} from "../../../../db/models"

export default async function handler(req, res) {
    
    const {email, password} = req.body
    
    if (req.method !== "POST"){
        res.status(400).json({message: "Must be a post route"})
    }

    try {
        
        const companyData = await Company.findOne({
          where: {
            email: email,
          },
        });
        
    
        if (!companyData) {
          res
            .status(400)
            .json({ message: 'Address not found. Please try again!' });
          return;
        }
    
        const validPassword = companyData.checkPassword(password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect password. Please try again!' });
          return;
        }

        const companyId = companyData.id

        // save session here

        res.status(200).json({ companyId })

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    };




// import { withIronSessionApiRoute } from "iron-session/next";
// import { ironOptions } from "../../../../lib/iron-session-config";
// import { Company } from "../../../../db/models/"

// export default withIronSessionApiRoute(loginRoute, ironOptions);

// async function loginRoute(req, res) {
//   // get user from database
//   try {
//     const companyData = await Company.findOne({ where: { email: req.body.email } });


//     if (!companyData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email, please try again" });
//       return;
//     }

//     const validPassword = companyData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect password, please try again" });
//       return;
//     }
// } catch (e) {
//     console.log("hit catch in login api route")
//     console.error(e);
// }

//   req.session.user = {
//     id: 230,
//     admin: true,
//   };
//   await req.session.save();
//   res.send({ ok: true });
// }
