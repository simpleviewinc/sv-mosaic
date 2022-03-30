import * as React from "react";
import { memo, useState, useMemo, ReactElement, MouseEvent } from "react";

// Components
import Button from "@root/components/Button";

// Types
import { AssetProperties, ImageVideoDocumentLinkBrowsingDef } from ".";
import { MosaicFieldProps } from "@root/components/Field";
import {
	AssetCard,
	AssetLabel,
	AssetLabelTooltip,
	AssetPropertiesColumn,
	AssetValue,
	BrowseOptionsContainer,
	BrowseSpan,
	BrowsingContainer,
	ButtonsWrapper,
	Column,
	ImageVideoLinkDocumentBrowsingContainer,
	MenuColumn,
	MoreText,
	StyledAnchor,
	StyledImg,
	StyledTooltip,
	TableRow,
	Td,
} from "./ImageVideoLinkDocumentBrowsing.styled";

// Components
import MenuFormFieldCard from "@root/forms/MenuFormFieldCard";
import BrowseOption from "./BrowseOption";

const DOCUMENT = "document";
const IMAGE = "image";
const LINK = "link";
const VIDEO = "video";

const FormFieldImageVideoLinkDocumentBrowsing = (
	props: MosaicFieldProps<ImageVideoDocumentLinkBrowsingDef, AssetProperties[]>
): ReactElement => {
	const { fieldDef, value } = props;

	// State variables
	const [assetType, setAssetType] = useState("");

	/**
	 * The Browse button should execute the function
	 * corresponding to the asset that was loaded.
	 */
	const handleBrowse = async (e: MouseEvent<HTMLElement>, asset: string) => {
		e.preventDefault();
		if (asset === DOCUMENT) {
			try {
				await fieldDef?.inputSettings?.handleSetDocument();
			} catch (error) {
				console.log(error)
			}
		}

		if (asset === VIDEO) {
			try {
				await fieldDef?.inputSettings?.handleSetVideo();
			} catch (error) {
				console.log(error)
			}
		}

		if (asset === LINK) {
			try {
				await fieldDef?.inputSettings?.handleSetLink();
			} catch (error) {
				console.log(error)
			}
		}

		if (asset === IMAGE) {
			try {
				await fieldDef?.inputSettings?.handleSetImage();
			} catch (error) {
				console.log(error)
			}
		}

		setAssetType(asset);
	};

	/**
	 * Executes the remove function that comes from the
	 * Form component. This function sets the Form field value
	 * to an empty array.
	 * @param e click event
	 */
	const handleRemove = (e: MouseEvent<HTMLElement>) => {
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
						{property.label === "URL" ? (
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
									placement="top"
									text={
										<table>
											<tbody>{tootltipContent}</tbody>
										</table>
									}
									type="advanced"
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

	const hasOptions =
		fieldDef?.inputSettings?.handleSetImage ||
		fieldDef?.inputSettings?.handleSetVideo ||
		fieldDef?.inputSettings?.handleSetDocument ||
		fieldDef?.inputSettings?.handleSetLink;

	return (
		<ImageVideoLinkDocumentBrowsingContainer>
			{(Array.isArray(value) && value?.length === 0) || !value ? (
				<BrowsingContainer>
					<BrowseSpan>
						{!hasOptions ? "No browsing options" : "Browse:"}
					</BrowseSpan>
					<BrowseOptionsContainer>
						{fieldDef?.inputSettings?.handleSetImage && (
							<BrowseOption
								disabled={fieldDef?.disabled}
								handleBrowse={handleBrowse}
								assetType={IMAGE}
							/>
						)}
						{fieldDef?.inputSettings?.handleSetVideo && (
							<BrowseOption
								disabled={fieldDef?.disabled}
								handleBrowse={handleBrowse}
								assetType={VIDEO}
							/>
						)}
						{fieldDef?.inputSettings?.handleSetDocument && (
							<BrowseOption
								disabled={fieldDef?.disabled}
								handleBrowse={handleBrowse}
								assetType={DOCUMENT}
							/>
						)}
						{fieldDef?.inputSettings?.handleSetLink && (
							<BrowseOption
								disabled={fieldDef?.disabled}
								handleBrowse={handleBrowse}
								assetType={LINK}
							/>
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
								data-testid="image-test"
								width={257}
								height={168}
							/>
						</Column>
					)}
					<AssetPropertiesColumn
						hasImage={
							fieldDef?.inputSettings?.src &&
							(assetType === IMAGE || assetType === VIDEO)
						}
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
							className="first"
							color="teal"
							variant="text"
							label="Browse"
							muiAttrs={{ disableRipple: true }}
							disabled={fieldDef?.disabled}
							onClick={async (e) => await handleBrowse(e, assetType)}
						></Button>
						<Button
							color="red"
							variant="text"
							label="Remove"
							muiAttrs={{ disableRipple: true }}
							disabled={fieldDef?.disabled}
							onClick={(e) => handleRemove(e)}
						></Button>
					</ButtonsWrapper>
				</AssetCard>
			)}
		</ImageVideoLinkDocumentBrowsingContainer>
	);
};

export default memo(FormFieldImageVideoLinkDocumentBrowsing);
