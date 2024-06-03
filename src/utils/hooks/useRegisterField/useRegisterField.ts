import { useEffect } from "react";
import { MosaicFieldProps } from "@root/components/Field";

function useRegisterField(props: MosaicFieldProps & { fieldRef?: React.MutableRefObject<HTMLDivElement> }) {
	const {
		fieldDef: {
			name,
		} = {},
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
			fieldRef: fieldRef?.current,
			inputRef: inputRef?.current,
		});

		return unmount;
	}, [mountField, name, inputRef, skeleton, fieldRef]);
}

export default useRegisterField;
