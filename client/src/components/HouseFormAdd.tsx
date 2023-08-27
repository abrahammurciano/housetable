import House, { HouseCreate } from "../models/House";
import FormField from "./form/FormField";
import Submit from "./form/Submit";
import { Navigate } from "react-router-dom";
import List from "./List";
import ErrorBox from "./ErrorBox";
import HosueForm from "./HouseForm";


export default class HouseFormAdd extends HosueForm {
	override url = () => "/api/houses";
	override method: string = "POST";
	override postSubmit = (house: House): void => this.setState({ navigate: `/house/${house.id}?success=House added successfully!` });

	constructor(props: {}) {
		super(props);
		this.state = {
			errors: [],
			buttonDisabled: true,
		};
	}

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const house = this.data(event.currentTarget.form!);
		let filled = true;
		for (const value of Object.values(house)) {
			filled &&= value !== undefined && value !== null && value !== "";
		}
		this.setState({ buttonDisabled: !filled, errors: [] });
	}

	protected override data = (form: HTMLFormElement): HouseCreate => {
		const raw = Object.fromEntries(new FormData(form));
		return {
			address: raw["address"] as string,
			currentValue: Number(raw["currentValue"]),
			loanAmount: Number(raw["loanAmount"]),
			risk: Number(raw["risk"]),
		}
	}

	override render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.state.navigate && <Navigate to={this.state.navigate} />}
				<FormField label="Address" name="address" placeholder="Enter the address..." required onChange={this.handleChange} />
				<FormField label="Current value" name="currentValue" placeholder="Enter the current value..." type="number" prefix="$" required onChange={this.handleChange} />
				<FormField label="Loan amount" name="loanAmount" placeholder="Enter the loan amount..." type="number" prefix="$" onChange={this.handleChange} />
				<Submit disabled={this.state.buttonDisabled}>Add</Submit>
				<List gap={10}>
					{this.state.errors.map((error, index) => (
						<ErrorBox key={index} error={error} />
					))}
				</List>
			</form>
		);
	}
}