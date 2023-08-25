import { Component } from "react";
import House, { HouseCreate } from "../models/House";
import FormField from "./form/FormField";
import SliderField from "./form/SliderField";
import Submit from "./form/Submit";
import { Navigate } from "react-router-dom";
import List from "./List";
import ErrorBox from "./ErrorBox";

interface HouseFormProps {
	house?: House;
}

interface HouseFormState {
	navigate?: string;
	errors: string[];
	buttonDisabled: boolean;
}

export default class HouseForm extends Component<HouseFormProps, HouseFormState> {
	constructor(props: HouseFormProps) {
		super(props);
		this.state = {
			errors: [],
			buttonDisabled: true,
		};
	}

	private handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const house = this.houseData(event.currentTarget);

		try {
			const response = await (this.props.house ? this.updateHouse : this.createHouse)(house);
			const json = await response.json();

			if (response.ok) {
				const house = json as House;
				this.setState({ navigate: `/house/${house.id}?success` });
			} else {
				this.setState({ errors: json.errors });
			}
		} catch (error: any) {
			console.error(error);
			this.setState({ errors: [error.message] })
		}
	};

	private createHouse = async (house: HouseCreate): Promise<Response> => {
		return await fetch('/api/houses', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(house),
		});
	};

	private updateHouse = async (house: HouseCreate): Promise<Response> => {
		return await fetch(`/api/houses/${this.props.house?.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(house),
		});
	};

	private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const house = this.houseData(event.currentTarget.form!);
		let changed = false;
		for (const [key, value] of Object.entries(house)) {
			if (this.props.house) {
				changed = changed || (this.props.house as any)[key] !== value
			} else if (value) {
				changed = true;
			}
		}
		this.setState({ buttonDisabled: !changed });
	}

	private houseData(form: HTMLFormElement): HouseCreate {
		const data = Object.fromEntries(new FormData(form));
		return {
			address: data["address"] as string,
			currentValue: parseFloat(data["currentValue"] as string),
			loanAmount: parseFloat(data["loanAmount"] as string),
			risk: parseFloat(data["risk"] as string),
		};
	}


	override render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.state.navigate && <Navigate to={this.state.navigate} />}
				{this.props.house && <FormField label="House ID" name="id" readonly value={this.props.house.id} />}
				<FormField label="Address" name="address" placeholder="Enter the address..." required value={this.props.house?.address} onChange={this.handleChange} />
				<FormField label="Current value" name="currentValue" placeholder="Enter the current value..." type="number" prefix="$" required value={this.props.house?.currentValue} onChange={this.handleChange} />
				<FormField label="Loan amount" name="loanAmount" placeholder="Enter the loan amount..." type="number" prefix="$" value={this.props.house?.loanAmount} onChange={this.handleChange} />
				<SliderField label="Risk" name="risk" step={0.01} percent value={this.props.house?.risk} onChange={this.handleChange} />
				<Submit disabled={this.state.buttonDisabled}>{this.props.house ? "Update" : "Save"}</Submit>
				<List gap={10}>
					{this.state.errors.map((error, index) => (
						<ErrorBox key={index} error={error} />
					))}
				</List>
			</form>
		);
	}
}