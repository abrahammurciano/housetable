import HousesList from "../components/HousesList";
import { Component } from "react";
import Page from "../components/layout/Page";

class Home extends Component<{}, {}> {
	override render() {
		return (
			<Page>
				<HousesList />
			</Page>
		);
	}
}

export default Home;