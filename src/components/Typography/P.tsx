import * as React from "react";
import { ReactElement } from "react";
import BodyText from "./BodyText";
import { TypographyGenericProps } from "./TypographyTypes";

export default function P(props: TypographyGenericProps): ReactElement {
	return <BodyText as="p" {...props}></BodyText>
}