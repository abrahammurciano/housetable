import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";


export default class House extends Model {
	declare id: number;
	declare address: string;
	declare currentValue: number;
	declare loanAmount: number;
	declare risk: number;
}

House.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	currentValue: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	loanAmount: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
	risk: {
		type: DataTypes.FLOAT,
		allowNull: false,
		validate: {
			min: 0,
			max: 1,
		},
	}
}, {
	sequelize: sequelize,
});