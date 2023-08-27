import { Component } from "react";
import House from "../models/House";
import HouseTile from "./HouseTile/HouseTile";
import Colours from "../Colours";

const style: React.CSSProperties = {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-evenly",
};

interface HousesListState {
	houses: House[];
}

class HousesList extends Component<{}, HousesListState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			houses: [],
		};
	}

	override async componentDidMount() {
		try {
			const response = await fetch("/api/houses");
			const houses = await response.json();
			this.setState({ houses });
		}
		catch (error) {
			console.log(error);
		}
	}

	override render() {
		return (
			<div style={style}>
				{this.state.houses.length === 0 &&
					<h1 style={{ color: Colours.LIGHT_GRAY }}>
						There are no houses yet. Add one!
					</h1>
				}
				{this.state.houses.map((house) => (
					<HouseTile key={house.id} house={house} />
				))}
			</div>
		);
	}
}

export default HousesList;