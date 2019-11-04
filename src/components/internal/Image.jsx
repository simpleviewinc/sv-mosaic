import React, { memo } from "react";

function Image(props) {
	return (
		<img className={props.className} src={props.src}/>
	)
}

export default memo(Image);