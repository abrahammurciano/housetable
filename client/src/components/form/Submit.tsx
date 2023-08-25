import { CSSProperties, Component, ReactNode } from "react";
import Button from "../Button/Button";

interface SubmitProps {
	disabled: boolean;
	children?: ReactNode;
}

const style: CSSProperties = {
	marginTop: 10,
	width: "100%",
};

export default class Submit extends Component<SubmitProps, {}> {
	static defaultProps = {
		disabled: false,
	};

	override render() {
		return (
			<Button style={style} type="submit" disabled={this.props.disabled}>{this.props.children}</Button >
		);
	}
}