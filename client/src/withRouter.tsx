import { Component } from 'react';
import { useParams } from 'react-router-dom';

export default function withRouter(WrappedComponent: typeof Component) {
	return function (props: any) {
		const params = useParams();

		return (
			<WrappedComponent {...props} params={params} />
		);
	};
}