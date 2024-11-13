import React, { memo, useMemo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { GroupData, GroupInputSettings } from "./FormFieldGroupTypes";
import type { MosaicGridConfig } from "@root/types";

import { StyledRows } from "@root/components/Form/Section/SectionStyled";
import Row from "@root/components/Form/Row/Row";
import { StyledFieldset } from "./FormFieldGroup.styled";

const FormFieldGroup = ({
	fieldDef,
	methods,
	skeleton,
	path: leadingPath,
}: MosaicFieldProps<"group", GroupInputSettings, GroupData>) => {
	const {
		name,
		inputSettings = { fields: [] },
	} = fieldDef;
	const { fields } = inputSettings;

	const layout = useMemo<MosaicGridConfig>(
		() => inputSettings.layout || fields.map(field => [[field.name]]),
		[fields, inputSettings.layout],
	);

	const path = useMemo(() => [...(leadingPath || []), name], [leadingPath, name]);

	return (
		<StyledFieldset>
			<StyledRows>
				{layout.map((row, i) => (
					<Row
						key={`row-${i}`}
						row={row}
						rowIdx={i}
						fieldsDef={fields}
						spacing="compact"
						methods={methods}
						skeleton={skeleton}
						path={path}
					/>
				))}
			</StyledRows>
		</StyledFieldset>
	);
};

export default memo(FormFieldGroup);
