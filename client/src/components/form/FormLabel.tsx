import { CSSProperties, Component } from "react";

interface FormFieldProps {
	name?: string;
	label?: string;
}

const style: CSSProperties = {
	marginTop: 10,
	fontSize: "large",
	fontWeight: "bold",
	textAlign: "start",
};

export default class FormField extends Component<FormFieldProps, {}> {
	override render() {
		return (
			<label style={style} htmlFor={this.props.name}>{this.props.label}</label>
		);
	}
}