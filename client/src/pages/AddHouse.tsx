import { Component } from "react";
import Page from "../components/layout/Page";
import HouseFormAdd from "../components/HouseFormAdd";
import BackButton from "../components/BackButton/BackButton";

class AddHouse extends Component<{}, {}> {
	override render() {
		return (
			<Page maxCardWidth={600}>
				<BackButton>Back</BackButton>
				<h1>Add a House</h1>
				<HouseFormAdd></HouseFormAdd>
			</Page>
		);
	}
}

export default AddHouse;