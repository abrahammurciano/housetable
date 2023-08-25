
import sequelize from "../src/sequelize";
import chai from "chai";

chai.config.truncateThreshold = Infinity;

before(async () => {
	await sequelize.sync({ force: true });
});

after(async () => {
	await sequelize.close();
});