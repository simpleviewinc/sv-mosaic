import type { ReactElement } from "react";

import React, { memo } from "react";

import type { CodeFieldData, CodeFieldInputSettings } from "./FormFieldCodeTypes";
import type { MosaicFieldProps } from "@root/components/Field";
import { Wrapper } from "./FormFieldCode.styled";
import MonacoCodeEditor from "./MonacoCodeEditor";

/**
 * A form field component that provides a Monaco code editor for entering and editing code.
 * Supports syntax highlighting, themes, and advanced Monaco editor features.
 *
 * This component wraps the Monaco editor with form field functionality, allowing it to be
 * used within forms with validation, error handling, and standard field behavior.
 *
 * @example
 * ```tsx
 * <FormFieldCode
 *   fieldDef={{
 *     name: "sourceCode",
 *     type: "code",
 *     inputSettings: {
 *       language: "javascript",
 *       theme: "dark",
 *       autogrow: true,
 *       minHeight: 200,
 *       maxHeight: 600
 *     }
 *   }}
 *   value="console.log('Hello, world!');"
 *   onChange={(value) => handleCodeChange(value)}
 * />
 * ```
 *
 * @example With TypeScript and custom Monaco options
 * ```tsx
 * <FormFieldCode
 *   fieldDef={{
 *     name: "tsCode",
 *     type: "code",
 *     inputSettings: {
 *       language: "typescript",
 *       theme: "light",
 *       height: 400,
 *       monacoOptions: {
 *         fontSize: 14,
 *         wordWrap: "on",
 *         minimap: { enabled: false }
 *       }
 *     }
 *   }}
 *   value={typescriptCode}
 *   onChange={setTypescriptCode}
 *   disabled={isReadonly}
 * />
 * ```
 */
const CodeField = ({
	value,
	onChange,
	fieldDef: {
		inputSettings = {},
	},
	disabled,
	error,
}: MosaicFieldProps<"code", CodeFieldInputSettings, CodeFieldData>): ReactElement => {
	return (
		<Wrapper $error={Boolean(error)}>
			<MonacoCodeEditor
				{...inputSettings}
				disabled={disabled}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	);
};

export default memo(CodeField);
