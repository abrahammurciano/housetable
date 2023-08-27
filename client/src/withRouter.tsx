import { Component } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function withRouter(WrappedComponent: typeof Component) {
	return function (props: any) {
		const params = useParams();
		const [searchParams, setSearchParams] = useSearchParams();

		return (
			<WrappedComponent {...props} params={params} searchParams={searchParams} setSearchParams={setSearchParams} />
		);
	};
}