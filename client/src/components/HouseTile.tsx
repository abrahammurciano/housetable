import { Component } from "react";
import House from "../models/House";

interface HouseTileProps {
	house: House;
}

class HouseTile extends Component<HouseTileProps, {}> {
	override render() {
		return (
			<div>
				{this.props.house.id}
			</div>
		);
	}
}

export default HouseTile;