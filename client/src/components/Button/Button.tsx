import { CSSProperties, Component, ReactNode } from "react";
import Colours from "../../Colours";
import css from "./Button.module.css"

interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	type?: "button" | "submit" | "reset";
	disabled: boolean;
	style?: CSSProperties;
	children?: ReactNode;
}

const cssVars = {
	"--secondary": Colours.SECONDARY,
	"--white": Colours.WHITE,
}

export default class Button extends Component<ButtonProps, {}> {
	private style: CSSProperties;

	static defaultProps = {
		disabled: false,
	};

	constructor(props: ButtonProps) {
		super(props);
		this.style = {
			fontSize: "x-large",
			fontWeight: "bold",
			textAlign: "center",
			borderRadius: "1000000px",
			border: `1px solid ${Colours.SECONDARY}`,
			paddingBlock: 10,
			paddingInline: 30,
		};
	}

	override render() {
		return (
			<button className={css.Button + (this.props.disabled ? ` ${css.disabled}` : "")} onClick={this.props.onClick} style={{ ...this.style, ...this.props.style, cursor: this.props.disabled ? "not-allowed" : "pointer", ...cssVars }} type={this.props.type}>{this.props.children}</button>
		);
	}
}