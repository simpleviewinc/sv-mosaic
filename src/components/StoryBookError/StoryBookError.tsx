import * as React from "react";

interface ErrorState {
	error : Error
}

export default class StoryBookError extends React.Component<{}, ErrorState> {
	errorRendered: boolean

	constructor(props) {
		super(props);
		this.state = {
			error : undefined
		};

		// store a value to determine if we've rendered the error to the screen
		this.errorRendered = false;
	}

	componentDidUpdate() {
		if (this.errorRendered === true) {
			// if we've rendered with the error already, clear the error
			this.errorRendered = false;
			this.setState({
				error : undefined
			})
		}

		if (this.state.error) {
			this.errorRendered = true;
		}
	}

	componentDidCatch(error, info) {
		this.setState({
			error
		});
	}

	render() {
		if (this.state.error) {
			return (
				<div>
					{this.state.error.message}
				</div>
			);
		}

		return this.props.children;
	}
}