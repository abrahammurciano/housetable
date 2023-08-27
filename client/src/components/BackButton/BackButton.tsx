import { CSSProperties, Component } from "react";
import { Link } from "react-router-dom";
import css from "./BackButton.module.css";
import Colours from "../../Colours";

interface BackButtonProps {
	children?: React.ReactNode;
}

const style: CSSProperties = {
	paddingInlineStart: 40,
	textAlign: "start",
	fontWeight: "bold",
	backgroundImage: "url(/images/back.png)",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "start center",
	backgroundSize: "contain",
	color: Colours.SECONDARY,
}

export default class BackButton extends Component<BackButtonProps, {}> {
	override render() {
		return (
			<div style={{ display: "flex" }}>

				<Link to="/" style={{ textDecoration: "none" }}>
					<div style={style} className={css.BackButton}>
						{this.props.children}
					</div>
				</Link>
			</div>
		);
	}
}