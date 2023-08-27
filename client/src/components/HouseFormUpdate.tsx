import House from "../models/House";
import FormField from "./form/FormField";
import Submit from "./form/Submit";
import { Navigate } from "react-router-dom";
import List from "./List";
import ErrorBox from "./ErrorBox";
import SuccessBox from "./SuccessBox";
import HosueForm, { HouseFormState } from "./HouseForm";
import PercentBar from "./form/PercentBar";

interface HouseFormUpdateProps {
	house: House;
	success?: string;
}

interface HouseFormUpdateState extends HouseFormState {
	success?: string;
	house: House;
}

export default class HouseFormUpdate extends HosueForm<HouseFormUpdateProps, HouseFormUpdateState> {
	override url = (): string => `/api/houses/${this.props.house.id}`;
	override method: string = "PUT";
	override postSubmit = (house: House): void => {
		this.setState({ house: house, success: "House updated successfully!", buttonDisabled: true });
	}
	constructor(props: HouseFormUpdateProps) {
		super(props);
		this.state = {
			errors: [],
			buttonDisabled: true,
			house: props.house,
			success: props.success,
		};
	}

	protected override preSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		this.setState({ errors: [], success: undefined });
	};

	protected override data = (form: HTMLFormElement): House => {
		const raw = Object.fromEntries(new FormData(form));
		return {
			id: this.state.house.id,
			address: raw["address"] as string,
			currentValue: Number(raw["currentValue"]),
			loanAmount: Number(raw["loanAmount"]),
			risk: Number(raw["risk"]),
		}
	}

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const house = this.data(event.currentTarget.form!);
		let changed = false;
		for (const [key, value] of Object.entries(house)) {
			changed ||= (this.state.house as any)[key] !== value;
		}
		this.setState({ buttonDisabled: !changed, errors: [], success: undefined });
	}


	override render() {
		console.log(this.state.house.risk)
		return (
			<form onSubmit={this.handleSubmit}>
				{this.state.navigate && <Navigate to={this.state.navigate} />}
				<FormField label="House ID" name="id" readonly value={this.state.house.id} />
				<FormField label="Address" name="address" placeholder="Enter the address..." required value={this.state.house.address} onChange={this.handleChange} />
				<FormField label="Current value" name="currentValue" placeholder="Enter the current value..." type="number" prefix="$" required value={this.state.house.currentValue} onChange={this.handleChange} />
				<FormField label="Loan amount" name="loanAmount" placeholder="Enter the loan amount..." type="number" prefix="$" value={this.state.house.loanAmount} onChange={this.handleChange} />
				<PercentBar label="Risk" percent={this.state.house.risk} />
				<Submit disabled={this.state.buttonDisabled}>Update</Submit>
				<List gap={10}>
					{this.state.errors.map((error, index) => (
						<ErrorBox key={index} error={error} />
					))}
					{this.state.success && <SuccessBox success={this.state.success} />}
				</List>
			</form>
		);
	}
}