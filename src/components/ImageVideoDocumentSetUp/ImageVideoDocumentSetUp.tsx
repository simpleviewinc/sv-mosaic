import * as React from 'react';
import { memo, useState, useMemo, ReactElement } from 'react';

// Components
import Button from '@root/forms/Button';
import Label from '@root/components/Field/Label';

// Types
import { ImageVideoDocumentSetUpProps } from '.';
import {
	AssetCard,
	AssetLabel,
	AssetPropertiesColumn,
	ButtonsWrapper,
	Column,
	MenuColumn,
	MoreText,
	Row,
	SetUpButtonsWrapper,
	StyledMenu,
} from './ImageVideoDocumentSetUp.styled';

// Material UI
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';

// Components
import IconButton from '@root/components/IconButton';
import Tooltip from '@root/components/Tooltip';

const options = ['Edit', 'Translate'];

const ImageVideoDocumentSetUp = (
	props: ImageVideoDocumentSetUpProps
): ReactElement => {
	const {
		assetObject,
		label,
		handleBrowse,
		handleEdit,
		handleRemove,
		handleSetDocument,
		handleSetImage,
		handleSetVideo,
		handleTranslate,
		src,
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenuHandler = () => {
		setAnchorEl(null);
	};

	let multipleActions = false;

	if (
		(handleSetImage && handleSetVideo) ||
    (handleSetVideo && handleSetDocument) ||
    (handleSetDocument && handleSetImage)
	) {
		multipleActions = true;
	}

	const iconMenu = (
		<>
			<IconButton icon={MoreVertIcon} onClick={handleClick} />
			<StyledMenu
				id='long-menu'
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				transformOrigin={{ vertical: 'top', horizontal: 'center' }}
				keepMounted
				open={open}
				onClose={closeMenuHandler}
			>
				{options.map((option) => (
					<MenuItem
						key={option}
						onClick={closeMenuHandler}
					>
						{option}
					</MenuItem>
				))}
			</StyledMenu>
		</>
	);

	const tootltipContent = useMemo(() =>
		assetObject.map((property) => (
			<Row key={`${property.label}-${property.value}`}>
				<AssetLabel>{property.label}</AssetLabel>
				<span>{property.value}</span>
			</Row>
		)),
	[assetObject]
	);

	const showMore = (
		<Tooltip
			text={tootltipContent}
			type='advanced'
		>
			<MoreText>More</MoreText>
		</Tooltip>
	);

	// Only show the firt three asset's properties on the card
	const assetProperties = useMemo(() =>
		assetObject.slice(0, 4).map((property, idx) => (
			<Row key={`${property.label}-${property.value}`}>
				<AssetLabel>{property.label}</AssetLabel>
				<span>{property.value}</span>
				{idx === 3 && (
					<>
              ...
						{showMore}
					</>
				)}
			</Row>
		)),
	[assetObject]
	);

	return (
		<div>
			<Label>{label}</Label>
			{(assetObject.length === 0) ? (
				<SetUpButtonsWrapper multipleActions={multipleActions}>
					{handleSetImage && (
						<Button buttonType='secondary' onClick={handleSetImage}>
              SET IMAGE
						</Button>
					)}
					{handleSetVideo && (
						<Button buttonType='secondary' onClick={handleSetVideo}>
              SET VIDEO
						</Button>
					)}
					{handleSetDocument && (
						<Button buttonType='secondary' onClick={handleSetDocument}>
              SET DOCUMENT
						</Button>
					)}
				</SetUpButtonsWrapper>
			) : (
				<AssetCard>
					{src && 
					<Column>
						<img src={src} width={261} height={172} />
					</Column>}
					<AssetPropertiesColumn>{assetProperties}</AssetPropertiesColumn>
					<MenuColumn>{iconMenu}</MenuColumn>
					<ButtonsWrapper>
						<Button buttonType='blueText' onClick={handleBrowse}>
              Browse
						</Button>
						<Button buttonType='redText' onClick={handleRemove}>
              Remove
						</Button>
					</ButtonsWrapper>
				</AssetCard>
			)}
		</div>
	);
};

export default memo(ImageVideoDocumentSetUp);
