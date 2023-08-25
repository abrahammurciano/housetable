import { CSSProperties, Component } from "react";

interface ListProps {
	gap: number;
	children?: React.ReactNode;
}

const style: CSSProperties = {
	width: "100%",
	display: "flex",
	flexDirection: "column",
	gap: 10,
}

export default class List extends Component<ListProps, {}> {
	static defaultProps = {
		gap: 0,
	}
	override render() {
		return (
			<div style={{ gap: this.props.gap, ...style }}>
				{this.props.children}
			</div>
		);
	}
}