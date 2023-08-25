import { CSSProperties, Component } from "react";
import { Link } from "react-router-dom";



const style: CSSProperties = {
	backgroundImage: "url(/images/logo.svg)",
	height: "100%",
	width: "100%",
	backgroundRepeat: "no-repeat",
	backgroundSize: "contain",
	backgroundPosition: "center",
	cursor: "pointer",
}


class Logo extends Component<{}, {}> {

	override render() {
		return (
			<Link to="/">
				<div style={style} />
			</Link>
		);
	}
}

export default Logo;