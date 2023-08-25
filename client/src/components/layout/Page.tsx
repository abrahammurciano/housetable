import { CSSProperties, Component, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import MainCard from "./MainCard";

interface PageProps {
	maxCardWidth?: number;
	children?: ReactNode;
}

const style: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
	justifyContent: "space-between",
}

class Page extends Component<PageProps, {}> {
	override render() {
		return (
			<div style={style}>
				<Header maxHeight={300} />
				<MainCard maxWidth={this.props.maxCardWidth}>
					{this.props.children}
				</MainCard>
				<Footer />
			</div>
		);
	}
}

export default Page;