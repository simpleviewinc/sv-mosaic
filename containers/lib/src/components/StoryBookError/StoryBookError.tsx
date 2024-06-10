import * as React from "react";
import { ReactNode, Component } from "react";

interface Props {
	children: ReactNode;
}

interface ErrorState {
	error : Error;
}

export default class StoryBookError extends Component<Props, ErrorState> {
	errorRendered: boolean;

	constructor(props: Props) {
		super(props);
		this.state = {
			error : undefined,
		};

		// store a value to determine if we've rendered the error to the screen
		this.errorRendered = false;
	}

	componentDidUpdate(): void {
		if (this.errorRendered === true) {
			// if we've rendered with the error already, clear the error
			this.errorRendered = false;
			this.setState({
				error : undefined,
			});
		}

		if (this.state.error) {
			this.errorRendered = true;
		}
	}

	componentDidCatch(error: Error): void {
		this.setState({
			error,
		});
	}

	render(): ReactNode {
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
