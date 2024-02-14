import * as React from "react";
import { memo, ReactElement } from "react";

interface ImageProps {
	className: string;
	src: string;
}

function Image(props: ImageProps): ReactElement {
	return (
		<img className={props.className} src={props.src} />
	);
}

export default memo(Image);
