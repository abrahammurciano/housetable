import { Component } from "react";
import House from "../models/House";

export interface HouseFormState {
	navigate?: string;
	errors: string[];
	buttonDisabled: boolean;
}

export default abstract class HosueForm<P = {}, S extends HouseFormState = HouseFormState> extends Component<P, S> {
	abstract url(): string;
	abstract method: string;

	abstract postSubmit(house: House): void;

	protected preSubmit(event: React.FormEvent<HTMLFormElement>): void { }

	protected handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		this.preSubmit(event);
		const house = this.data(event.currentTarget);

		try {
			const response = await this.send(house);
			const json = await response.json();

			if (response.ok) {
				this.postSubmit(json as House);
			} else {
				this.setState({ errors: json.errors });
			}
		} catch (error: any) {
			console.error(error);
			this.setState({ errors: [error.message] })
		}
	}

	protected abstract data(form: HTMLFormElement): { [key: string]: any };

	private send = async (house: { [key: string]: any; }): Promise<Response> => {
		return await fetch(this.url(), {
			method: this.method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(house),
		})
	}
}