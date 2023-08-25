import { expect } from "chai";
import House from "../src/models/House";
import app from "../src/app";
import client from "supertest";
import './setup';


describe("GET /api/houses/:id", () => {
	let house = {
		id: 0,
		address: "Address 1",
		currentValue: 100000,
		loanAmount: 50000,
		risk: 0.5,
	};

	before(async () => {
		house.id = (await House.create(house)).id;
	})

	after(async () => {
		await House.destroy({ where: { id: house.id } });
	});

	it("should return a specific house", async () => {
		const res = await client(app).get(`/api/houses/${house.id}`);
		expect(res.status).to.equal(200);
		expect(res.body).to.include(house);
	});

	it("should return 404 if house is not found", async () => {
		const res = await client(app).get("/api/houses/999");
		expect(res.status).to.equal(404);
	});

	it("should return 400 if id is not a number", async () => {
		const res = await client(app).get("/api/houses/abc");
		expect(res.status).to.equal(400);
	});
});