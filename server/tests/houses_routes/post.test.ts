import { expect } from "chai";
import app from "../../src/app";
import client from "supertest";
import './setup';



describe("POST /api/houses", () => {
	it("should create a new house", async () => {
		const house = {
			address: "Address 1",
			currentValue: 100000,
			loanAmount: 50000,
			risk: 0.5,
		};
		const res = await client(app).post("/api/houses").send(house);
		expect(res.status).to.equal(201);
		expect(res.body).to.include(house);
	});

	const requiredFields = ["address", "currentValue", "loanAmount", "risk"];

	for (const field of requiredFields) {
		it(`should return a 400 error if ${field} is missing`, async () => {
			const house: any = {
				address: "Address 1",
				currentValue: 100000,
				loanAmount: 50000,
				risk: 0.5,
			};
			delete house[field];

			const res = await client(app).post("/api/houses").send(house);
			expect(res.status).to.equal(400);
			expect(res.body.errors.join()).to.deep.include(field);
		});
	}

	it("should return a 400 error if risk is not between 0 and 1", async () => {
		const house = {
			address: "Address 1",
			currentValue: 100000,
			loanAmount: 50000,
			risk: 1.5,
		};

		const res = await client(app).post("/api/houses").send(house);
		expect(res.status).to.equal(400);
		expect(res.body.errors.join()).to.include("risk");
	});
});