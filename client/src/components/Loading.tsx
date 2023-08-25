import { CSSProperties, Component } from "react";


interface LoadingProps {
	width?: number;
	height?: number;
}

export default class Loading extends Component<LoadingProps, {}> {
	private style: CSSProperties

	constructor(props: LoadingProps) {
		super(props);
		this.style = {
			width: props.width ?? "100%",
			height: props.height ?? "100%",
			backgroundImage: "url(/images/loading.svg)",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundSize: "contain",
		}
	}

	override render() {
		return (
			<div style={this.style} />
		);
	}
}