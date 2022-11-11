// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma"

export default async function handler (req, res) {

  if (req.method === "GET"){
    try {
      const allUsers = await prisma.user.findMany()
      res.status(200).json({ allUsers })
    } catch (e){
      console.log(e)
    }
  }
}
