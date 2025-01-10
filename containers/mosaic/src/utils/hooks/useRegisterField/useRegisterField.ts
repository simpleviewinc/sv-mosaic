import { useEffect } from "react";
import type { MosaicFieldProps } from "@root/components/Field";

function useRegisterField(props: MosaicFieldProps & { fieldRef?: React.MutableRefObject<HTMLDivElement> }) {
	const {
		fieldDef: {
			name,
		} = {},
		path,
		skeleton,
		methods: {
			mountField,
		} = {},
		inputRef,
		fieldRef,
	} = props;

	useEffect(() => {
		if (!mountField || !name || skeleton) {
			return;
		}

		const { unmount } = mountField({
			name: name,
			path,
			fieldRef: fieldRef?.current,
			inputRef: inputRef?.current,
		});

		return unmount;
	}, [mountField, name, path, inputRef, skeleton, fieldRef]);
}

export default useRegisterField;
