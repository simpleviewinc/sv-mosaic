import * as React from 'react';
import { memo, useState, useMemo, ReactElement } from 'react';

// Components
import Button from '@root/forms/Button';

// Types
import { ImageVideoDocumentSetUpProps } from '.';
import {
	AssetCard,
	AssetLabel,
	AssetLabelTooltip,
	AssetPropertiesColumn,
	AssetValue,
	ButtonsWrapper,
	Column,
	MenuColumn,
	MoreText,
	TableRow,
	Td,
	SetUpButtonsWrapper,
	StyledImg,
	StyledLabel,
	StyledMenu,
	StyledTooltip,
} from './ImageVideoDocumentSetUp.styled';

// Material UI
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';

// Components
import IconButton from '@root/components/IconButton';

const IMAGE = 'image';
const DOCUMENT = 'document';
const VIDEO = 'video';

const ImageVideoDocumentSetUp = (
	props: ImageVideoDocumentSetUpProps
): ReactElement => {
	const {
		label,
		inputSettings,
		value,
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const [assetType, setAssetType] = useState('');

	const handleImageClick = () => {
		inputSettings?.handleSetImage();
		setAssetType(IMAGE);
	};

	const handleVideoClick = () => {
		inputSettings?.handleSetVideo();
		setAssetType(VIDEO);
	};

	const handleDocumentClick = () => {
		inputSettings?.handleSetDocument();
		setAssetType(DOCUMENT);
	};

	/**
   * The Browse button should execute the function
   * corresponding to the asset that was loaded.
   */
	const handleBrowse = (e) => {
		e.preventDefault();
		switch (assetType) {
		case DOCUMENT:
			inputSettings?.handleSetDocument();
			break;

		case VIDEO:
			inputSettings?.handleSetVideo();
			break;

		default:
			inputSettings?.handleSetImage();
			break;
		}
	};

	const handleRemove = (e) => {
		e.preventDefault();
		inputSettings?.handleRemove();
	}

	const open = Boolean(anchorEl);

	const handleMoreIconClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenuHandler = () => {
		setAnchorEl(null);
	};

	let multipleActions = false;

	if (
		(inputSettings?.handleSetImage && inputSettings?.handleSetVideo) ||
    (inputSettings?.handleSetVideo && inputSettings?.handleSetDocument) ||
    (inputSettings?.handleSetDocument && inputSettings?.handleSetImage)
	) {
		multipleActions = true;
	}

	const iconMenu = (
		<>
			<IconButton
				data-testid='icon-button-test'
				icon={MoreVertIcon}
				onClick={handleMoreIconClick}
			/>
			<StyledMenu
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				keepMounted
				open={open}
				onClose={closeMenuHandler}
			>
				{inputSettings?.options?.map((option) => (
					<MenuItem key={`label-${option.label}`} onClick={option.action}>
						{option.label}
					</MenuItem>
				))}
			</StyledMenu>
		</>
	);

	const tootltipContent = useMemo(
		() => Array.isArray(value) && value?.map((property) => (
				<TableRow key={`${property.label}-${property.value}`}>
					<Td>
						<AssetLabelTooltip>{property.label}</AssetLabelTooltip>
					</Td>
					<Td>{property.value}</Td>
				</TableRow>
			)),
		[value]
	);

	const showMore = (
		<StyledTooltip
			placement='top'
			text={
				<table>
					<tbody>{tootltipContent}</tbody>
				</table>
			}
			type='advanced'
		>
			<MoreText>More</MoreText>
		</StyledTooltip>
	);

	// Only show the first four asset's properties on the card
	const assetPropertiesRows = useMemo(
		() =>
		Array.isArray(value) && value?.slice(0, 4).map((property, idx) => (
				<TableRow key={`${property.label}-${property.value}`}>
					<Td>
						<AssetLabel>{property.label}</AssetLabel>
					</Td>
					<Td>
						<AssetValue>{property.value}</AssetValue>
						{idx === 3 && value.length > 4 && (
							<>
								<AssetValue>...</AssetValue>
								{showMore}
							</>
						)}
					</Td>
				</TableRow>
			)),
		[value]
	);

	return (
		<div>
			{((Array.isArray(value) && value?.length === 0) || value === '' || value === undefined) ? (
				<SetUpButtonsWrapper multipleActions={multipleActions}>
					{inputSettings?.handleSetImage && (
						<Button buttonType='secondary' onClick={handleImageClick}>
							SET IMAGE
						</Button>
					)}
					{inputSettings?.handleSetVideo && (
						<Button buttonType='secondary' onClick={handleVideoClick}>
						SET VIDEO
						</Button>
					)}
					{inputSettings?.handleSetDocument && (
						<Button buttonType='secondary' onClick={handleDocumentClick}>
							SET DOCUMENT
						</Button>
					)}
				</SetUpButtonsWrapper>
			) : (
				<AssetCard>
					{inputSettings?.src && !(assetType === DOCUMENT) && (
						<Column>
							<StyledImg
								src={inputSettings?.src}
								data-testid='image-test'
								width={261}
								height={172}
							/>
						</Column>
					)}
					<AssetPropertiesColumn>
						<table>
							<tbody>{assetPropertiesRows}</tbody>
						</table>
					</AssetPropertiesColumn>
					{inputSettings?.options && <MenuColumn>{iconMenu}</MenuColumn>}
					<ButtonsWrapper>
						<Button buttonType='blueText' onClick={(e) => handleBrowse(e)}>
							Browse
						</Button>
						<Button buttonType='redText' onClick={(e) => handleRemove(e)}>
							Remove
						</Button>
					</ButtonsWrapper>
				</AssetCard>
			)}
		</div>
	);
};

export default memo(ImageVideoDocumentSetUp);
