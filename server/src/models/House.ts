import { Column, Table, Model, AllowNull, NotEmpty } from "sequelize-typescript";
import { IsType } from "../validators";
import { DataTypes } from "sequelize";

export interface HouseCreationAttributes {
	address: string;
	currentValue: number;
	loanAmount: number;
}

export interface HouseAttributes extends HouseCreationAttributes {
	id: number;
	risk: number;
}

@Table
export default class House extends Model<HouseAttributes, HouseCreationAttributes> {

	@AllowNull(false)
	@NotEmpty
	@IsType("string", "address")
	@Column
	address: string;

	@AllowNull(false)
	@NotEmpty
	@IsType("number", "currentValue")
	@Column(DataTypes.NUMBER)
	currentValue: number;

	@AllowNull(false)
	@NotEmpty
	@IsType("number", "loanAmount")
	@Column(DataTypes.NUMBER)
	loanAmount: number;

	@Column(DataTypes.VIRTUAL)
	get risk(): number {
		let result = this.loanAmount / this.currentValue;
		if (result > 0.5) {
			result *= 1.1;
		}
		return Math.min(Math.max(result, 0), 1);
	}
}