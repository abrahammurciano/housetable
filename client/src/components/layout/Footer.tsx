import { Component } from "react";

const style: React.CSSProperties = {
	backgroundColor: "#2B2B2B",
	paddingBlock: "100px",
	paddingInline: "50px",
	color: "#FFFFFF",
	textAlign: "center",
};

class Footer extends Component<{}, {}> {
	override render() {
		return (
			<div style={style}>
				Created by Abraham Murciano
			</div>
		);
	}
}

export default Footer;