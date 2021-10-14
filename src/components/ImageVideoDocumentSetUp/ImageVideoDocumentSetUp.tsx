import * as React from 'react';
import { memo, useState, ReactElement } from 'react';

// Components
import Button from '@root/forms/Button';
import Label from '@root/components/Field/Label';

// Types
import { ImageVideoDocumentSetUpProps } from '.';
import {
	AssetCard,
	AssetLabel,
	ButtonsWrapper,
	Column,
	Row,
	SetUpButtonsWrapper,
} from './ImageVideoDocumentSetUp.styled';

// Material UI
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Components
import IconButton from '@root/components/IconButton';

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

	const iconMenu = (
		<>
			<IconButton icon={MoreVertIcon} onClick={handleClick} />
			<Menu
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
						selected={option === 'Pyxis'}
						onClick={closeMenuHandler}
					>
						{option}
					</MenuItem>
				))}
			</Menu>
		</>
	);

	const assetProperties = assetObject.map((property, idx) => {
		return (
			<Row key={`${property.label}-${property.value}`}>
				<AssetLabel>{property.label}</AssetLabel>
				<span>{property.value}</span>
				{idx === 3 && (
					<Button
						buttonType='blueText'
						smallerButton
					>
            More
					</Button>
				)}
			</Row>
		);
	});

	return (
		<>
			<Label>{label}</Label>
			{assetObject.length === 0 ? (
				<SetUpButtonsWrapper>
					{handleSetImage && (
						<Button buttonType='secondary' onClick={handleSetImage}>
              SET IMAGE
						</Button>
					)}
				</SetUpButtonsWrapper>
			) : (
				<AssetCard>
					<Column>
						<img src={src} width={261} height={172} />
					</Column>
					<Column>{assetProperties}</Column>
					<Column>{iconMenu}</Column>
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
		</>
	);
};

export default memo(ImageVideoDocumentSetUp);
