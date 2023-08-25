import { Component, ReactNode } from "react";

interface ContentProps {
	children: ReactNode;
}

class Content extends Component<ContentProps, {}> {
	override render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Content;