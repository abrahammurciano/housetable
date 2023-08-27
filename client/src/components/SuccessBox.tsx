import { CSSProperties, Component } from "react";
import Colours from "../Colours";

interface ErrorBoxProps {
	success: string;
}

const style: CSSProperties = {
	width: "100%",
	padding: 10,
	textAlign: "center",
	color: Colours.SUCCESS,
	fontWeight: "bold",
}

export default class SuccessBox extends Component<ErrorBoxProps, {}> {
	override render() {
		return (
			<div style={style}>
				{this.props.success}
			</div>
		);
	}
}