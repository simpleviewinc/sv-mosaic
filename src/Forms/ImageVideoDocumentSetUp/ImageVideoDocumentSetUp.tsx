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
		assetProperties,
		label,
		handleRemove,
		handleSetDocument,
		handleSetImage,
		handleSetVideo,
		options,
		src,
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const [assetType, setAssetType] = useState('');

	const handleImageClick = () => {
		handleSetImage();
		setAssetType(IMAGE);
	};

	const handleVideoClick = () => {
		handleSetVideo();
		setAssetType(VIDEO);
	};

	const handleDocumentClick = () => {
		handleSetDocument();
		setAssetType(DOCUMENT);
	};

	/**
   * The Browse button should execute the function
   * corresponding to the asset that was loaded.
   */
	const handleBrowse = () => {
		switch (assetType) {
		case DOCUMENT:
			handleSetDocument();
			break;

		case VIDEO:
			handleSetVideo();
			break;

		default:
			handleSetImage();
			break;
		}
	};

	const open = Boolean(anchorEl);

	const handleMoreIconClick = (event) => {
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
				{options?.map((option) => (
					<MenuItem key={`label-${option.label}`} onClick={option.action}>
						{option.label}
					</MenuItem>
				))}
			</StyledMenu>
		</>
	);

	const tootltipContent = useMemo(
		() =>
			assetProperties.map((property) => (
				<TableRow key={`${property.label}-${property.value}`}>
					<Td>
						<AssetLabelTooltip>{property.label}</AssetLabelTooltip>
					</Td>
					<Td>{property.value}</Td>
				</TableRow>
			)),
		[assetProperties]
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
			assetProperties.slice(0, 4).map((property, idx) => (
				<TableRow key={`${property.label}-${property.value}`}>
					<Td>
						<AssetLabel>{property.label}</AssetLabel>
					</Td>
					<Td>
						<AssetValue>{property.value}</AssetValue>
						{idx === 3 && assetProperties.length > 4 && (
							<>
								<AssetValue>...</AssetValue>
								{showMore}
							</>
						)}
					</Td>
				</TableRow>
			)),
		[assetProperties]
	);

	return (
		<div>
			<StyledLabel>{label}</StyledLabel>
			{assetProperties.length === 0 ? (
				<SetUpButtonsWrapper multipleActions={multipleActions}>
					{handleSetImage && (
						<Button buttonType='secondary' onClick={handleImageClick}>
							SET IMAGE
						</Button>
					)}
					{handleSetVideo && (
						<Button buttonType='secondary' onClick={handleVideoClick}>
						SET VIDEO
						</Button>
					)}
					{handleSetDocument && (
						<Button buttonType='secondary' onClick={handleDocumentClick}>
							SET DOCUMENT
						</Button>
					)}
				</SetUpButtonsWrapper>
			) : (
				<AssetCard>
					{src && !(assetType === DOCUMENT) && (
						<Column>
							<StyledImg
								src={src}
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
					{options && <MenuColumn>{iconMenu}</MenuColumn>}
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
