import * as React from "react";
import type { ReactElement, MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";
import theme from "@root/theme";

// Components
import Popover from "@root/components/Popover";
import Button from "@root/components/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import PlaceIcon from "@mui/icons-material/Place";

export default {
	title: "Components/Popover",
};

const ExampleWrapper = styled.div`
	flex-grow: 1;
`;

const Wrapper = styled.div`
	height: 400px;
	overflow: auto;
`;

const StyledGrid = styled(Grid)`
	position: relative;
	background-color: ${theme.newColors.grey1["100"]};
	height: 150%;
	align-items: center;
	justify-content: center;
`;

const Title = styled.p`
	color: ${theme.newColors.almostBlack["100"]};
	font-weight: ${theme.fontWeight.semiBold};
	font-size: 16px;
	margin-bottom: 8px;
`;

const Subtitle = styled.span`
	color: ${theme.newColors.grey3["100"]};
	font-size: 12px;
`;

const ExampleTopContent = (
	<div>
		<Title>Title</Title>
		<Subtitle>Subtitle</Subtitle>
	</div>
);

const ButtonBottomContent = (
	<div style={{ display: "flex", justifyContent: "center" }}>
		<Button
			color="teal"
			variant="text"
			label="Add"
			mIcon={AddIcon}
			onClick={() => alert("Add button clicked")}
		/>
	</div>
);

export const Playground = (): ReactElement => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [open, setOpen] = useState(false);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const centerScroll = (element) => {
		if (!element) {
			return;
		}

		const container = element.parentElement;
		container.scrollTop = element.clientHeight / 4;
	};

	return (
		<ExampleWrapper>
			<Wrapper>
				<StyledGrid container ref={centerScroll}>
					<div>
						<Button
							color="yellow"
							variant="contained"
							label="Open Popover"
							onClick={handleClick}
						/>
						<Popover
							anchorEl={anchorEl}
							topContent={ExampleTopContent}
							bottomContent={ButtonBottomContent}
							onClose={handleClose}
							open={open}
						/>
					</div>
				</StyledGrid>
			</Wrapper>
		</ExampleWrapper>
	);
};

const StyledInput = styled.input`
	background-color: ${theme.newColors.grey1["100"]};
	border: ${theme.borders.simplyGrey};
	height: 47px;
	border-radius: 0;
`;

const withInputTopContent = (
	<div>
		<StyledInput />
		<Title>Title</Title>
		<Subtitle>Subtitle</Subtitle>
	</div>
);

export const Input = (): ReactElement => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [open, setOpen] = useState(false);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				color="yellow"
				variant="contained"
				label="Open Popover"
				onClick={handleClick}
			/>
			<Popover
				anchorEl={anchorEl}
				topContent={withInputTopContent}
				bottomContent={ButtonBottomContent}
				onClose={handleClose}
				open={open}
			/>
		</div>
	);
};

const LinkTitle = styled.span`
	color: ${theme.newColors.almostBlack["100"]};
	cursor: pointer;
	font-size: 16px;
	font-weight: ${theme.fontWeight.semiBold};
	text-decoration: underline;
`;

const LinkSubtitle = styled.span`
	color: ${theme.newColors.grey3["100"]};
	font-size: 12px;
	margin-left: 4px;
`;

const TopContent = (
	<div>
		<LinkTitle onClick={() => alert("Title clicked")}>Clickable Title</LinkTitle>
		<div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
			<PlaceIcon sx={{ width: 12, color: theme.newColors.grey3["100"] }} />
			<LinkSubtitle>Subtitle</LinkSubtitle>
		</div>
	</div>
);

const options = [
	{
		label: "Label",
		value: "Aperiam ut sapiente ut exercitationemat",
	},
	{
		label: "Label",
		value: "Aperiam ut sapiente ut exercitationemat",
	},
	{
		label: "Label",
		value: "Aperiam ut sapiente ut exercitationemat",
	},
];

const Label = styled.span`
	color: ${theme.newColors.grey4["100"]};
	margin-right: 8px;
`;

const Value = styled.span`
	color: ${theme.newColors.grey3["100"]};
`;

const Mail = styled.span`
	display: block;
	color: ${theme.newColors.almostBlack["100"]};
	font-weight: ${theme.fontWeight.semiBold};
	font-size: 14px;
	margin: 16px 0;
`;

const Link = styled.span`
	color: ${theme.newColors.realTeal["100"]};
	cursor: pointer;
	font-weight: ${theme.fontWeight.semiBold};
	font-size: 14px;
`;

const BottomContent = (): ReactElement => {
	return (
		<div>
			{options.map((option, idx) => {
				return (
					<div key={`${option.label}-${idx}`} style={{ display: "flex", fontSize: 14 }}>
						<Label>
							{option.label}
							:
						</Label>
						<Value>{option.value}</Value>
					</div>
				);
			})}
			<Mail>mail@gmail.com</Mail>
			<Link onClick={() => alert("Link clicked")}>www.link.com</Link>
		</div>
	);
};

export const TextAndLinks = (): ReactElement => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [open, setOpen] = useState(false);

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				color="yellow"
				variant="contained"
				label="Open Popover"
				onClick={handleClick}
			/>
			<Popover
				anchorEl={anchorEl}
				topContent={TopContent}
				bottomContent={<BottomContent />}
				onClose={handleClose}
				open={open}
			/>
		</div>
	);
};
