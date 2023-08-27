import { Component } from "react";
import Page from "../components/layout/Page";
import House from "../models/House";
import withRouter from "../withRouter";
import { Params, SetURLSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import HouseFormUpdate from "../components/HouseFormUpdate";
import BackButton from "../components/BackButton/BackButton";


interface HouseDetailProps {
	params: Params<string>
	searchParams: URLSearchParams;
	setSearchParams: SetURLSearchParams
}

interface HouseDetailState {
	house?: House;
	success?: string;
}

class HouseDetail extends Component<HouseDetailProps, HouseDetailState> {
	constructor(props: HouseDetailProps) {
		super(props);
		this.state = {};
	}

	override async componentDidMount(): Promise<void> {
		const { id } = this.props.params as any;
		const success = this.props.searchParams.get("success") ?? undefined;
		const house: House = await (await fetch(`/api/houses/${id}`)).json();
		console.log(`GET /api/houses/${id}`)
		console.log(house)
		this.setState({ house, success });
	}

	override render() {
		return (
			<Page maxCardWidth={600}>
				<BackButton>Back</BackButton>
				<h1>House Details</h1>
				{this.state.house ? <HouseFormUpdate house={this.state.house} success={this.state.success} /> : <Loading height={150} />}
			</Page>
		);
	}
}

export default withRouter(HouseDetail);