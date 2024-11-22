import * as React from "react";
import type { ReactElement } from "react";
import { memo } from "react";

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
