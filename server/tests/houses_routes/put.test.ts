import { expect } from "chai";
import app from "../../src/app";
import client from "supertest";
import './setup';
import House from "../../src/models/House";


describe("PUT /api/houses/:id", () => {
	const house = {
		id: 0,
		address: "Address 1",
		currentValue: 100000,
		loanAmount: 50000,
		risk: 0.5,
	};

	beforeEach(async () => {
		house.id = (await House.create(house)).id;
	});

	afterEach(async () => {
		await House.destroy({ where: {} });
	});

	it("should update an existing house", async () => {
		const updatedHouse = {
			address: "Updated Address",
			currentValue: 120000,
			loanAmount: 60000,
			risk: 0.7,
		};
		const res = await client(app).put(`/api/houses/${house.id}`).send(updatedHouse);
		expect(res.status).to.equal(200);
		expect(res.body).to.deep.include(updatedHouse);
	});

	it("should return a 404 error if house to update does not exist", async () => {
		const fakeId = 999;
		const updatedHouse = {
			address: "Updated Address",
			currentValue: 120000,
			loanAmount: 60000,
			risk: 0.7,
		};
		const res = await client(app).put(`/api/houses/${fakeId}`).send(updatedHouse);
		expect(res.status).to.equal(404);
	});

	it("should return a 400 error if risk is not between 0 and 1", async () => {
		const updatedHouse = {
			address: "Updated Address",
			currentValue: 120000,
			loanAmount: 60000,
			risk: 1.5,
		};
		const res = await client(app).put(`/api/houses/${house.id}`).send(updatedHouse);
		expect(res.status).to.equal(400);
	});

	for (const field of ["address", "currentValue", "loanAmount", "risk"]) {
		it(`should update only the ${field} field`, async () => {
			const updatedHouse: any = {
				address: "Updated Address",
				currentValue: 120000,
				loanAmount: 60000,
				risk: 0.7,
			};
			const res = await client(app).put(`/api/houses/${house.id}`).send({ [field]: updatedHouse[field] });
			expect(res.status).to.equal(200);
			expect(res.body[field]).to.equal(updatedHouse[field]);
		});
	}
});
