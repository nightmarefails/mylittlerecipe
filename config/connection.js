const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.cookbook_db,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    }
);

module.export = sequelize;