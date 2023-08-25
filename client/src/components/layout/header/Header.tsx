import { CSSProperties, Component } from "react";
import Logo from "../../Logo";
import Colours from "../../../Colours";
import CircleDrop from "./CircleDrop";

interface HeaderState {
	scroll: number;
	width: number;
}

interface HeaderProps {
	maxHeight: number;
	minHeight: number;
}

const outerStyle: CSSProperties = {
	backgroundColor: Colours.PRIMARY,
	width: "100%",
	position: "fixed",
	zIndex: 99,
};

const innerStyle: CSSProperties = {
	width: "100%",
	position: "relative",
};

const logoStyle: CSSProperties = {
	width: "60%",
	position: "absolute",
	top: "50%",
	bottom: "50%",
	left: "50%",
	right: "50%",
	transform: "translateY(-50%) translateX(-50%)",
};

const circleDropStyle: CSSProperties = {
	position: "fixed",
	top: 0,
	zIndex: -1,
	width: "100%",
};

class Header extends Component<HeaderProps, HeaderState> {

	static defaultProps = {
		maxHeight: 400,
		minHeight: 80,
	}

	constructor(props: HeaderProps) {
		super(props);
		this.state = {
			scroll: 0,
			width: window.innerWidth,
		};
	}

	override componentDidMount(): void {
		window.addEventListener("scroll", this.handleScroll);
		window.addEventListener("resize", this.handleResize);
	}

	override componentWillUnmount(): void {
		window.removeEventListener("scroll", this.handleScroll);
		window.removeEventListener("resize", this.handleResize);
	}

	private handleScroll = () => {
		this.setState({
			scroll: window.scrollY,
		});
	}

	private handleResize = () => {
		this.setState({
			width: window.innerWidth,
		});
	}

	override render() {
		const heightRange = this.props.maxHeight - this.props.minHeight;
		const contentHeight = Math.max(this.props.maxHeight - this.state.scroll, this.props.minHeight);
		const expandedPercentage = (contentHeight - this.props.minHeight) / heightRange;


		return (
			<div>
				<div style={{ height: this.props.maxHeight }}>
					<div style={outerStyle}>
						<div style={{ height: contentHeight, ...innerStyle }}>
							<div style={{ height: Math.min(this.props.maxHeight * 0.6, contentHeight * 0.8), ...logoStyle }}>
								<Logo />
							</div>
						</div>
					</div>
				</div >
				<div style={{ ...circleDropStyle }}>
					<CircleDrop width={this.state.width} height={expandedPercentage * 0.4 * this.props.maxHeight} extraHeight={contentHeight + expandedPercentage * this.props.maxHeight * 0.3} />
				</div>
			</div>
		);
	}
}

export default Header;