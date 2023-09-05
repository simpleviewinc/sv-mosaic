import * as React from "react";
import { ReactElement, HTMLAttributes, useCallback, useRef, useEffect, useState } from "react";
import Tooltip from "../Tooltip";

import ClearIcon from "@mui/icons-material/Clear";

import { ChipsProps } from "./ChipTypes";
import { StyledChip, StyledDeletableChip } from "./Chip.styled";

import { useDebounce } from "@root/utils/hooks/useDebounce";

const Chip = (props: ChipsProps & HTMLAttributes<HTMLDivElement>): ReactElement => {
	const { label, required, disabled, selected, onDelete, onClick } = props;
	const [hasTooltip, setHasTooltip] = useState(false);
	const ref = useRef<HTMLDivElement>();

	const checkSize = useCallback(() => {
		// Maybe this isn't the best way, but it's the only way that worked for me.
		// The e.offsetWidth < e.scrollWidth does not work in this case
		const cloned = ref.current.cloneNode(true) as HTMLDivElement;
		cloned.setAttribute("style", "position: absolute; max-width: none");
		cloned.querySelector("span").setAttribute("style", "text-overflow: clip");
		ref.current.parentNode.insertBefore(cloned, ref.current.nextSibling);

		const sourceBox = ref.current.getBoundingClientRect();
		const cloneBox = cloned.getBoundingClientRect();

		ref.current.parentNode.removeChild(cloned);

		setHasTooltip(cloneBox.width > sourceBox.width || cloneBox.height > sourceBox.height);
	}, []);


	const { bounce } = useDebounce(checkSize);

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		checkSize();

		window.addEventListener("resize", bounce);

		return () => window.removeEventListener("resize", bounce);
	}, [checkSize]);

	const children = (
		onDelete ? (
			<StyledDeletableChip
				{...props}
				ref={ref}
				required={required}
				disabled={disabled}
				selected={selected}
				deleteIcon={<ClearIcon data-testid='delete-icon-test-id' />}
				onDelete={onDelete}
				data-testid="delete-chip-testid"
			/>
		) : (
			<StyledChip
				{...props}
				ref={ref}
				required={required}
				disabled={disabled}
				selected={selected}
				onClick={onClick}
				data-testid="chip-testid"
			/>
		)
	);

	if (hasTooltip) {
		return (
			<Tooltip text={label}>
				{children}
			</Tooltip>
		)
	}

	return children;
};

export default Chip;
