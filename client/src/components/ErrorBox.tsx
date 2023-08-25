import { CSSProperties, Component } from "react";
import Colours from "../Colours";

interface ErrorBoxProps {
	error: string;
}

const style: CSSProperties = {
	width: "100%",
	padding: 10,
	textAlign: "center",
	color: Colours.DANGER,
	fontWeight: "bold",
}

export default class ErrorBox extends Component<ErrorBoxProps, {}> {
	override render() {
		return (
			<div style={style}>
				{this.props.error}
			</div>
		);
	}
}