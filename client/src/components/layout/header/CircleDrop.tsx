import { CSSProperties, Component, ReactNode } from "react";
import Colours from "../../../Colours";

interface CircleDropProps {
	width: number;
	height: number;
	extraHeight: number;
	children?: ReactNode;
}

const backStyle: CSSProperties = {
	width: "100%",
	overflow: "hidden",
	position: "relative",
};

const circleStyle: CSSProperties = {
	backgroundColor: Colours.PRIMARY,
	position: "absolute",
	bottom: 0,
	left: "50%",
	transform: "translate(-50%, 0)",
	borderRadius: "50%",
}

export default class CircleDrop extends Component<CircleDropProps, {}> {
	static defaultProps = {
		extraHeight: 0,
	}

	constructor(props: CircleDropProps) {
		super(props);
	}

	override render() {
		// https://math.stackexchange.com/a/605613/369267
		const h = this.props.height;
		const w = this.props.width;
		const diameter = h + (w * w) / (4 * h);

		return (
			<div>
				<div style={{ height: this.props.extraHeight, backgroundColor: Colours.PRIMARY }}></div>
				<div style={{ height: this.props.height, ...backStyle }}>
					<div style={{ width: diameter, height: diameter, ...circleStyle }}></div>
				</div >
			</div>
		);
	}
}