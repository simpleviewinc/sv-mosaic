import * as React from 'react';
import { memo, useState, useMemo, ReactElement } from 'react';

// Components
import Button from '@root/forms/Button';

// Types
import { AssetProperties, ImageVideoDocumentSetUpDef } from '.';
import { MosaicFieldProps } from '@root/components/Field';
import {
	AssetCard,
	AssetLabel,
	AssetLabelTooltip,
	AssetPropertiesColumn,
	AssetValue,
	BrowseOptionContainer,
	BrowseOptionsContainer,
	BrowseOptionSpan,
	BrowseSpan,
	BrowsingContainer,
	ButtonsWrapper,
	Column,
	ImageVideoLinkDocumentBrowsingContainer,
	MenuColumn,
	MoreText,
	RoundBackground,
	StyledAnchor,
	StyledDocumentIcon,
	StyledImageIcon,
	StyledImg,
	StyledLinkIcon,
	StyledTooltip,
	StyledVideoIcon,
	TableRow,
	Td,
} from './ImageVideoLinkDocumentBrowsingTypes.styled';

// Components
import MenuFormFieldCard from '@root/forms/MenuFormFieldCard';

const DOCUMENT = 'document';
const IMAGE = 'image';
const LINK = 'link';
const VIDEO = 'video';

const ImageVideoLinkDocumentBrowsing = (
	props: MosaicFieldProps<ImageVideoDocumentSetUpDef, AssetProperties[]>
): ReactElement => {
	const { fieldDef, value } = props;

	// State variables
	const [assetType, setAssetType] = useState('');

	let browsingOptions = 0;

	if (fieldDef?.inputSettings?.handleSetImage) browsingOptions++;
	if (fieldDef?.inputSettings?.handleSetVideo) browsingOptions++;
	if (fieldDef?.inputSettings?.handleSetDocument) browsingOptions++;
	if (fieldDef?.inputSettings?.handleSetLink) browsingOptions++;

	const setImage = () => {
		fieldDef?.inputSettings?.handleSetImage();
		setAssetType(IMAGE);
	};

	const setVideo = () => {
		fieldDef?.inputSettings?.handleSetVideo();
		setAssetType(VIDEO);
	};

	const setDocument = () => {
		fieldDef?.inputSettings?.handleSetDocument();
		setAssetType(DOCUMENT);
	};

	const setLink = () => {
		fieldDef?.inputSettings?.handleSetLink();
		setAssetType(LINK);
	};

	/**
	 * The Browse button should execute the function
	 * corresponding to the asset that was loaded.
	 */
	const handleBrowse = (e) => {
		e.preventDefault();
		switch (assetType) {
		case DOCUMENT:
			fieldDef?.inputSettings?.handleSetDocument();
			break;

		case VIDEO:
			fieldDef?.inputSettings?.handleSetVideo();
			break;

		case LINK:
			fieldDef?.inputSettings?.handleSetLink();
			break;

		default:
			fieldDef?.inputSettings?.handleSetImage();
			break;
		}
	};

	/**
	 * Executes the remove function that comes from the
	 * Form component. This function sets the Form field value
	 * to an empty array.
	 * @param e click event
	 */
	const handleRemove = (e) => {
		e.preventDefault();
		fieldDef?.inputSettings?.handleRemove();
	};

	const tootltipContent = useMemo(
		() =>
			Array.isArray(value) &&
			value?.map((property) => (
				<TableRow key={`${property.label}-${property.value}`}>
					<Td>
						<AssetLabelTooltip>{property.label}</AssetLabelTooltip>
					</Td>
					<Td>{property.value}</Td>
				</TableRow>
			)),
		[value]
	);

	// Only show the first four asset's properties on the card
	const assetPropertiesRows = useMemo(
		() =>
			Array.isArray(value) &&
			value?.slice(0, 4).map((property, idx) => (
				<TableRow key={`${property.label}-${property.value}`}>
					<Td>
						<AssetLabel>{property.label}</AssetLabel>
					</Td>
					<Td>
						{property.label === 'URL' ? (
							<StyledAnchor href={property.value}>
								{property.value}
							</StyledAnchor>
						) : (
							<AssetValue>{property.value}</AssetValue>
						)}
						{idx === 3 && value.length > 4 && (
							<>
								<AssetValue>...</AssetValue>
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
							</>
						)}
					</Td>
				</TableRow>
			)),
		[value]
	);

	return (
		<ImageVideoLinkDocumentBrowsingContainer>
			{(Array.isArray(value) && value?.length === 0) || !value ? (
				<BrowsingContainer>
					<BrowseSpan>Browse:</BrowseSpan>
					<BrowseOptionsContainer isMultipleOptions={browsingOptions > 1}>
						{fieldDef?.inputSettings?.handleSetImage && (
							<BrowseOptionContainer>
								<RoundBackground disabled={fieldDef?.disabled} onClick={setImage} data-testid='browse-image-test'>
									<StyledImageIcon />
								</RoundBackground>
								<BrowseOptionSpan>Image</BrowseOptionSpan>
							</BrowseOptionContainer>
						)}
						{fieldDef?.inputSettings?.handleSetVideo && (
							<BrowseOptionContainer>
								<RoundBackground disabled={fieldDef?.disabled} onClick={setVideo} data-testid='browse-video-test'>
									<StyledVideoIcon />
								</RoundBackground>
								<BrowseOptionSpan>Video</BrowseOptionSpan>
							</BrowseOptionContainer>
						)}
						{fieldDef?.inputSettings?.handleSetDocument && (
							<BrowseOptionContainer>
								<RoundBackground disabled={fieldDef?.disabled} onClick={setDocument} data-testid='browse-document-test'>
									<StyledDocumentIcon />
								</RoundBackground>
								<BrowseOptionSpan>Document</BrowseOptionSpan>
							</BrowseOptionContainer>
						)}
						{fieldDef?.inputSettings?.handleSetLink && (
							<BrowseOptionContainer>
								<RoundBackground disabled={fieldDef?.disabled} onClick={setLink} data-testid='browse-link-test'>
									<StyledLinkIcon />
								</RoundBackground>
								<BrowseOptionSpan>Link</BrowseOptionSpan>
							</BrowseOptionContainer>
						)}
					</BrowseOptionsContainer>
				</BrowsingContainer>
			) : (
				<AssetCard>
					{fieldDef?.inputSettings?.src &&
            !(assetType === DOCUMENT || assetType === LINK) && (
						<Column>
							<StyledImg
								src={fieldDef?.inputSettings?.src}
								data-testid='image-test'
								width={257}
								height={168}
							/>
						</Column>
					)}
					<AssetPropertiesColumn 
						hasImage={fieldDef?.inputSettings?.src && (assetType === IMAGE || assetType === VIDEO)}
					>
						<table>
							<tbody>{assetPropertiesRows}</tbody>
						</table>
					</AssetPropertiesColumn>
					{fieldDef?.inputSettings?.options && (
						<MenuColumn>
							<MenuFormFieldCard
								disabled={fieldDef?.disabled}
								options={fieldDef?.inputSettings?.options}
							/>
						</MenuColumn>
					)}
					<ButtonsWrapper>
						<Button
							buttonType='blueText'
							disabled={fieldDef?.disabled}
							onClick={(e) => handleBrowse(e)}
						>
							Browse
						</Button>
						<Button
							buttonType='redText'
							disabled={fieldDef?.disabled}
							onClick={(e) => handleRemove(e)}
						>
							Remove
						</Button>
					</ButtonsWrapper>
				</AssetCard>
			)}
		</ImageVideoLinkDocumentBrowsingContainer>
	);
};

export default memo(ImageVideoLinkDocumentBrowsing);
