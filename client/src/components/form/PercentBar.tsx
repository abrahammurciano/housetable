import { CSSProperties, Component } from "react";
import FormLabel from "./FormLabel";
import Colours from "../../Colours";

interface PercentBarProps {
	label?: string;
	percent: number;
}

const style: CSSProperties = {
	display: "flex",
	flexDirection: "column",
};

const outerStyle: CSSProperties = {
	marginBlock: 10,
	paddingBlock: 10,
	fontSize: "large",
	borderRadius: 10000000,
	border: `1px solid ${Colours.SECONDARY}`,
	width: "100%",
	textAlign: "center",
	position: "relative",

}

const innerStyle: CSSProperties = {
	backgroundColor: Colours.PRIMARY,
	borderRadius: 10000000,
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
}

const textStyle: CSSProperties = {
	position: "relative",
	zIndex: 1,
	color: Colours.SECONDARY,
	fontWeight: "bold",
}

export default class PercentBar extends Component<PercentBarProps, {}> {
	override render() {
		return (
			<div style={style}>
				<FormLabel label={this.props.label}></FormLabel>
				<div style={outerStyle}>
					<div style={{ ...innerStyle, width: `${this.props.percent * 100}%` }} />
					<div style={textStyle}>{Math.round(this.props.percent * 100)} %</div>
				</div>
			</div>
		);
	}
}