import { CSSProperties, Component } from "react";
import House from "../../models/House";
import css from "./HouseTile.module.css"
import { Link } from "react-router-dom";

interface HouseTileProps {
	house: House;
}

const style: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingInline: 20,
	paddingBlock: 80,

}

class HouseTile extends Component<HouseTileProps, {}> {
	override render() {
		return (
			<Link to={`/house/${this.props.house.id}`} style={{ textDecoration: "none", color: "inherit" }}>
				<div style={style} className={css.HouseTile}>
					<img src="/images/house.svg" style={{ width: "40%" }} />
					<h3>House #{this.props.house.id}</h3>
					<p>{this.props.house.address}</p>
				</div>
			</Link>
		);
	}
}

export default HouseTile;