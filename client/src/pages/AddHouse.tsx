import { Component } from "react";
import Page from "../components/layout/Page";
import HouseForm from "../components/HouseForm";

class AddHouse extends Component<{}, {}> {
	override render() {
		return (
			<Page maxCardWidth={600}>
				<h1>Add a House</h1>
				<HouseForm></HouseForm>
			</Page>
		);
	}
}

export default AddHouse;