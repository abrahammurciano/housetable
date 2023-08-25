import { Sequelize } from "sequelize-typescript";
import House from "./models/House";

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: ":memory:",
	logging: false,
	models: [House],
});

export default sequelize;