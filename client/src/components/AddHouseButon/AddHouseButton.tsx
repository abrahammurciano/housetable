import { CSSProperties, Component } from "react";
import Colours from "../../Colours";
import { Link } from 'react-router-dom';
import css from "./AddHouseButton.module.css";

const style: CSSProperties = {
	backgroundColor: Colours.SECONDARY,
	position: "fixed",
	bottom: 50,
	right: 50,
	boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	color: Colours.LIGHT,
	overflow: "hidden",
	fontWeight: "bold",
	fontSize: "x-large",
	textShadow: "0 0 10px rgba(0,0,0,0.5)",
	whiteSpace: "nowrap",
};

const iconStyle: CSSProperties = {
	backgroundImage: "url('/images/add.svg')",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "50%",
	height: "100%",
}

interface AddHouseButtonProps {
	size: number;
}

class AddHouseButton extends Component<AddHouseButtonProps, {}> {
	static defaultProps = {
		size: 80,
	};

	constructor(props: AddHouseButtonProps) {
		super(props);
		this.state = {
			clicked: false,
		};
	}

	handleClick = () => {
		this.setState({ clicked: true });
	};

	override render() {
		return (
			<Link to="/house/new">
				<div className={css.AddHouseButton} style={{ height: this.props.size, borderRadius: this.props.size / 2, ...style }} onClick={this.handleClick}>
					<div style={{ width: this.props.size, ...iconStyle }}></div>
					<div className={css.Label}>Add a House</div>
				</div>
			</Link>
		);
	}
}

export default AddHouseButton;