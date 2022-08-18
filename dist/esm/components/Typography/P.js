import * as React from "react";
import BodyText from "./BodyText";
export default function P(props) {
    return React.createElement(BodyText, { as: "p", ...props });
}
