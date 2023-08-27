import { CSSProperties, Component } from "react";
import FormLabel from "./FormLabel";
import Colours from "../../Colours";

interface FormFieldProps {
	type: string;
	name: string;
	label?: string;
	placeholder?: string;
	required: boolean;
	value?: any;
	readonly: boolean;
	prefix?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const style: CSSProperties = {
	display: "flex",
	flexDirection: "column",
};

const inputFrameStyle: CSSProperties = {
	paddingBlock: 10,
	paddingInline: 20,
	marginBlock: 10,
	border: `1px solid ${Colours.SECONDARY}`,
	borderRadius: 10000000,
	display: "flex",
	gap: 5,
	fontSize: "large",
};

const inputStyle: CSSProperties = {
	flexGrow: 1,
	fontSize: "large",
	outline: "none",
	border: "none"
}

export default class FormField extends Component<FormFieldProps, {}> {
	static defaultProps = {
		type: "text",
		required: false,
		readonly: false,
	};

	constructor(props: FormFieldProps) {
		super(props);
	}

	override render() {
		return (
			<div style={style}>
				<FormLabel name={this.props.name} label={this.props.label}></FormLabel>
				<div style={inputFrameStyle}>
					{this.props.prefix && <div>{this.props.prefix}</div>}
					<input style={inputStyle} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} required={this.props.required} defaultValue={this.props.value} onChange={this.props.onChange} />
				</div>
			</div>
		);
	}
}