import NextAuth from "next-auth"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import { Sequelize } from "sequelize"
import {Company, User, Answer, Question, Survey} from "../../../db/models/"
import UserSurvey from "../../../db/models/UserSurvey"

// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
    });

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [],
  adapter: SequelizeAdapter(sequelize, {
    models: {
        Company: sequelize.define("company", Company),
        User: sequelize.define("user", User),
        Survey: sequelize.define("survey", Survey),
        Question: sequelize.define("question", Question),
        Answer: sequelize.define("answer", Answer),
        UserSurvey: sequelize.define("user_surevey", UserSurvey)
    }
  }),
})