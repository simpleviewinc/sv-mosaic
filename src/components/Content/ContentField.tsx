import * as React from "react";
import { ReactNode } from "react";
import { ContentFieldProps} from "./ContentTypes";

// Components
import {
	Label,
	TransformContainer,
} from "./Content.styled";

/**
 * Renders the content created either by the transform funcion or the
 * raw data in case the transform function is not defined for the current field.
 */
const ContentField = ({label, content}: ContentFieldProps) => {
	return (
		<>
			<Label>{label}</Label>
			<TransformContainer>
				{content as ReactNode}
			</TransformContainer>
		</>
	)
};

export default ContentField
