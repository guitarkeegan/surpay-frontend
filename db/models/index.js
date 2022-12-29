// import models
const Company = require("./Company");
const User = require("./User");
const Question = require("./Question");
const Answer = require("./Answer");
const Survey = require("./Survey");
const UserSurvey = require("./UserSurvey");

//define the relationships!

Company.hasMany(Survey, {
    // foreignKey: "survey_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Survey.belongsTo(Company, {
    // foreignKey: "company_id"
});

Survey.hasMany(Question, {
    // foreignKey: "survey_id",
    // constraints: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
    // hooks: true
})

Question.belongsTo(Survey, {
    // foreignKey: "survey_id"
    onDelete: "SET NULL"
});

Question.hasMany(Answer, {
    // foreignKey: "question_id",
    onDelete: "CASCADE"
})

Answer.belongsTo(Question, {
    // foreignKey: "question_id"
    onDelete: "SET NULL"
})

User.belongsToMany(Survey, {
    through: UserSurvey,
    // onDelete: "SET NULL"
});

Survey.belongsToMany(User, {
    through: UserSurvey,
    // onDelete: "SET NULL"
})

module.exports = {Company, User, Survey, Question, Answer, UserSurvey}