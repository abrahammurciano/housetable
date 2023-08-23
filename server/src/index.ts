import app from "./app";
import sequelize from "./sequelize";

const port = 3000;

(async () => {
	await sequelize.sync();
	app.listen(port, () => {
		console.log(`Listening on port http://localhost:${port}`);
	});
})();