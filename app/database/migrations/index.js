module.exports = (db)=>{
    return{
        user : require("./user.migration")(db.database, db.Sequelize),
        post : require("./post.migration")(db.database, db.Sequelize),
        role : require("./role.migration")(db.database, db.Sequelize),
    }
}