import { Column, Table, Model, AllowNull, NotEmpty, Min, Max } from "sequelize-typescript";
import { IsType, asNumber } from "../validators";
import { DataTypes } from "sequelize";

export interface HouseCreationAttributes {
	address: string;
	currentValue: number;
	loanAmount: number;
	risk: number;
}

export interface HouseAttributes extends HouseCreationAttributes {
	id: number;
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
	// currentValue: number;
	get currentValue(): number {
		return this.getDataValue("currentValue");
	}

	set currentValue(value: any) {
		this.setDataValue("currentValue", asNumber(value) ?? value);
	}

	@AllowNull(false)
	@NotEmpty
	@IsType("number", "loanAmount")
	@Column(DataTypes.NUMBER)
	get loanAmount(): number {
		return this.getDataValue("loanAmount");
	}

	set loanAmount(value: any) {
		this.setDataValue("loanAmount", asNumber(value) ?? value);
	}

	@AllowNull(false)
	@NotEmpty
	@IsType("number", "risk")
	@Min(0)
	@Max(1)
	@Column(DataTypes.NUMBER)
	get risk(): number {
		return this.getDataValue("risk");
	}

	set risk(value: any) {
		this.setDataValue("risk", asNumber(value) ?? value);
	}
}