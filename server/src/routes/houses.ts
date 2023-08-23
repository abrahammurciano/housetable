import express from "express";
import House from "../models/House";
import { ValidationError } from "sequelize";

const router = express.Router();

router.get("/houses/:id", (req, res) => {
	(async () => {
		const id = parseInt(req.params.id);
		if (Number.isNaN(id)) {
			res.status(400).json({ "error": `ID must be an integer. Got ${req.params.id}` });
			return;
		}
		const house = await House.findByPk(id);
		if (house === null) {
			res.status(404).json({ "error": `House with ID ${id} does not exist.` });
			return;
		}
		res.json(house);
	})();
});

router.get("/houses", (req, res) => {
	(async () => {
		const houses = await House.findAll();
		res.json(houses);
	})();
});

router.post("/houses", (req, res) => {
	(async () => {
		try {
			const house = await House.create(req.body);
			res.status(201).json(house);
		} catch (error) {
			if (error instanceof ValidationError) {
				res.status(400).json({ errors: error.errors.map((err) => err.message) });
			} else {
				res.status(500).json({ error: "An error occurred while creating the house." });
			}
		}
	})();
});

router.put("/houses/:id", (req, res) => {
	(async () => {
		const id = parseInt(req.params.id);
		if (Number.isNaN(id)) {
			res.status(400).json({ "error": `ID must be an integer. Got ${req.params.id}` });
			return;
		}
		const house = await House.findByPk(id);
		if (house === null) {
			res.status(404).json({ "error": `House with ID ${id} does not exist.` });
			return;
		}
		try {
			await house.update(req.body);
			res.json(house);
		}
		catch (error) {
			if (error instanceof ValidationError) {
				res.status(400).json({ errors: error.errors.map((err) => err.message) });
			} else {
				res.status(500).json({ error: "An error occurred while updating the house." });
			}
		}
	})();
});

export default router;