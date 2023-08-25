import sequelize from "./sequelize";
import app from "./app";
import morgan from "morgan";

const port = 8008;

app.use(morgan("combined"));

(async () => {
	await sequelize.sync();
	app.listen(port, () => {
		console.log(`Website is up on http://localhost:${port}`);
	});
})();