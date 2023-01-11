import * as React from "react";
import { memo, forwardRef } from "react";
import Button from "@root/components/Button";
import { StyledDrawerHeader } from "./DrawerHeader.styled";
import { ButtonsWrapper } from "@root/forms/TopComponent/TopComponent.styled";
import { FormTitle } from "@root/forms/TopComponent/Utils/TitleWrapper";
import { DrawerHeaderProps } from "./DrawerHeaderTypes";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Views } from "@root/theme/theme";

const DrawerHeader = forwardRef((props: DrawerHeaderProps, ref) => {
	const {
		title,
		buttons,
		onCancel,
	} = props;

	return (
		<StyledDrawerHeader ref={ref}>
			<div style={{display: "flex", alignItems: "center"}}>
				{onCancel && (
					<IconButton
						data-testid="close-icon-test-id"
						aria-label="close"
						disableRipple
						onClick={onCancel}
						style={{ marginRight: "8px" }}
						size="large"
					>
						<CloseIcon />
					</IconButton>
				)}
				{title &&
					<FormTitle type={Views.drawer} data-testid="drawer-title-test-id">
						{title}
					</FormTitle>
				}
			</div>
			{buttons &&
				<ButtonsWrapper>
					{buttons.map((button, idx) => (
						<Button key={`${button.label}-${idx}`} {...button} />
					))}
				</ButtonsWrapper>
			}
		</StyledDrawerHeader>
	)
});

DrawerHeader.displayName = "DrawerHeader"

export default memo(DrawerHeader);
