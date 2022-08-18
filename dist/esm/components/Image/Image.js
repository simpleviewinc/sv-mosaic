import * as React from "react";
import { memo } from "react";
function Image(props) {
    return (React.createElement("img", { className: props.className, src: props.src }));
}
export default memo(Image);
