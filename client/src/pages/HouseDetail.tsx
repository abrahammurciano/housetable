import { Component } from "react";
import Page from "../components/layout/Page";
import HouseForm from "../components/HouseForm";
import House from "../models/House";
import withRouter from "../withRouter";
import { Params } from "react-router-dom";
import Loading from "../components/Loading";


interface HouseDetailProps {
	params: Params<string>
}

interface HouseDetailState {
	house?: House;
}

class HouseDetail extends Component<HouseDetailProps, HouseDetailState> {
	constructor(props: HouseDetailProps) {
		super(props);
		this.state = {};
	}

	override async componentDidMount(): Promise<void> {
		const { id } = this.props.params as any;
		const house: House = await (await fetch(`/api/houses/${id}`)).json();
		this.setState({ house });
	}

	override render() {
		return (
			<Page maxCardWidth={600}>
				<h1>House Details</h1>
				{this.state.house ? <HouseForm house={this.state.house} /> : <Loading height={150} />}
			</Page>
		);
	}
}

export default withRouter(HouseDetail);