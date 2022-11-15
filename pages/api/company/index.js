import {Company} from "../../../db/models"

export default async function handler(req, res) {
    const allCompanies = await Company.findAll();    
    res.status(200).json(allCompanies)
  }