import { Component } from "react";
import Colours from "../../Colours";

const style: React.CSSProperties = {
	margin: "100px auto",
	width: "90%",
	borderRadius: "10px",
	boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
	padding: "50px",
	backgroundColor: Colours.WHITE,
};

interface MainCardProps {
	maxWidth: number;
	textAlign: "left" | "center" | "right";
	children?: React.ReactNode;
}

class MainCard extends Component<MainCardProps, {}> {
	static defaultProps = {
		maxWidth: 1200,
		textAlign: "center",
	};

	constructor(props: MainCardProps) {
		super(props);
	}

	override render() {
		return (
			<div style={{ textAlign: this.props.textAlign, maxWidth: this.props.maxWidth, ...style }}>
				{this.props.children}
			</div>
		);
	}
}

export default MainCard;