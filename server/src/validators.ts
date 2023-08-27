import { Is } from "sequelize-typescript";

export function IsType(type: Function | string, propertyName: string) {
	const name = type instanceof Function ? type.name : type;
	return Is(`is${name[0].toUpperCase()}${name.slice(1)}`, (value: any) => {
		if (type instanceof Function ? value instanceof type : typeof value == type) {
			return;
		}
		throw new Error(`'${propertyName}' must be a ${name}, got ${typeof value} (${value})`);
	});
}