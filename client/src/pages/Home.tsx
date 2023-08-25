import HousesList from "../components/HousesList";
import AddHouseButton from "../components/AddHouseButon/AddHouseButton";
import { Component } from "react";
import Page from "../components/layout/Page";

class Home extends Component<{}, {}> {
	override render() {
		return (
			<Page>
				<HousesList />
				<AddHouseButton />
			</Page>
		);
	}
}

export default Home;