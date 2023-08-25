import { CSSProperties, Component } from "react";
import FormLabel from "./FormLabel";
import Colours from "../../Colours";

interface SliderFieldProps {
	name: string;
	label?: string;
	value?: number;
	start: number;
	end: number;
	step: number;
	percent: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SliderFieldState {
	value: number;
}

const style: CSSProperties = {
	display: "flex",
	flexDirection: "column",
};

const inputWrapperStyle: CSSProperties = {
	display: "flex",
	paddingBlock: 10,
	fontSize: "large",
	gap: 10,
}

const inputStyle: CSSProperties = {
	flexGrow: 1,
	fontSize: "large",
	outline: "none",
	border: "none",
	accentColor: Colours.SECONDARY,
}

export default class SliderField extends Component<SliderFieldProps, SliderFieldState> {

	static defaultProps = {
		start: 0,
		end: 1,
		step: 0.1,
		percent: false,
	}

	constructor(props: SliderFieldProps) {
		super(props);
		this.state = {
			value: props.value ?? (props.start + (props.end - props.start) / 2)
		}
	}

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ value: parseFloat(event.currentTarget.value) });
		this.props.onChange?.(event);
	}

	override render() {
		return (
			<div style={style} className="form-field">
				<FormLabel name={this.props.name} label={this.props.label}></FormLabel>
				<div style={inputWrapperStyle}>
					<input style={inputStyle} type="range" name={this.props.name} id={this.props.name} value={this.state.value} onChange={this.handleChange} min={this.props.start} max={this.props.end} step={this.props.step} />
					<div style={{ minWidth: 30 }}>{this.props.percent ? this.percentage() : this.state.value}</div>
				</div>
			</div>
		);
	}

	percentage = () => {
		return `${Math.round((this.state.value - this.props.start) * 100 / (this.props.end - this.props.start))} %`;
	}
}