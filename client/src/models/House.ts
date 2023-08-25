export interface HouseCreate {
	address: string;
	currentValue: number;
	loanAmount: number;
	risk: number;
}

export default interface House extends HouseCreate {
	id: number;
}