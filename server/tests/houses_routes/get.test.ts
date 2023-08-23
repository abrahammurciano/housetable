import { expect } from "chai";
import House from "../../src/models/House";
import app from "../../src/app";
import client from "supertest";
import './setup';

describe("GET /api/houses", () => {
	const houses = [
		{
			address: "Address 1",
			currentValue: 100000,
			loanAmount: 50000,
			risk: 0.5,
		}, {
			address: "Address 2",
			currentValue: 200000,
			loanAmount: 100000,
			risk: 0.5,
		}
	];

	before(async () => {
		await House.bulkCreate(houses);
	});

	after(async () => {
		await House.destroy({ where: {} });
	});

	it("should return all houses", async () => {
		const res = await client(app).get("/api/houses");
		expect(res.status).to.equal(200);
		expect(res.body.length).to.equal(houses.length);
		for (let i = 0; i < res.body.length; ++i) {
			expect(res.body[i]).to.include(houses[i]);
		}
	});
});