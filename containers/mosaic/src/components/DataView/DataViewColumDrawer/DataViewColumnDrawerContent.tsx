import type { ChangeEventHandler } from "react";
import React, { useMemo, useState } from "react";
import CheckboxList from "@root/components/CheckboxList";
import { useMosaicTranslation } from "@root/i18n";
import PageHeader from "../../PageHeader";
import type { ButtonProps } from "../../Button";
import type { DataViewColumnDrawerContentProps } from "./DataViewColumnDrawerTypes";
import {
	StyledWrapper,
	ColumnTitle,
	MutedText,
	NoColumns,
} from "./DataViewColumnDrawer.styled";
import DataViewColumnDrawerColumns from "./DataViewColumnDrawerColumns";
import type { MosaicLabelValue } from "@root/types";
import { StyledTextField } from "@root/components/Field/FormFieldText/FormFieldText.styled";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { escapeRegexp } from "@root/utils/string/escapeRegexp";

function DataViewColumnDrawerContent(props: DataViewColumnDrawerContentProps) {
	const [activeColumns, setActiveColumns] = useState<string[]>(props.columns.map((val) => val.name));
	const [keyword, setKeyword] = useState<string>("");
	const filteredColumns = useMemo(() => {
		if (!keyword) {
			return props.allColumns;
		}

		const regSearchKeyword = new RegExp(escapeRegexp(keyword), "i");
		return props.allColumns.filter((option) => {
			return option.label.match(regSearchKeyword);
		});
	}, [props.allColumns, keyword]);

	const checkedOptions = useMemo(() => activeColumns.reduce<MosaicLabelValue[]>((acc, curr) => {
		const column = props.allColumns.find(({ name }) => name === curr);

		if (!column) {
			return acc;
		}

		return [...acc, { value: column.name, label: column.label }];
	}, []), [activeColumns, props.allColumns]);

	const { t } = useMosaicTranslation();

	const saveColumns = function() {
		props.onClose();
		props.onChange(activeColumns);
	};

	const onColumnsChange = function(data) {
		setActiveColumns(data.map(d => d.value));
	};

	const columnOptions = filteredColumns
		.map((column) => {
			return {
				label: column.label,
				value: column.name,
			};
		})
		.sort((a, b) => {
			return a.label.localeCompare(b.label);
		});

	const drawerButton: ButtonProps[] = [
		{
			label: t("mosaic:common.cancel"),
			color: "gray",
			variant: "outlined",
			onClick: props.onClose,
		},
		{
			label: t("mosaic:common.apply"),
			onClick: saveColumns,
			color: "yellow",
			variant: "contained",
		},
	];

	const onKeywordChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => setKeyword(value);

	return (
		<div>
			<PageHeader
				title={t("mosaic:DataView.column_settings")}
				buttons={drawerButton}
				onBack={props.onClose}
				backLabel={t("mosaic:DataView.cancel_column_settings")}
			/>
			<StyledWrapper>
				<div className="left">
					<StyledTextField
						autoComplete="off"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
							inputProps: {
								"aria-label": "Keyword...",
							},
						}}
						className="searchBar"
						placeholder={t("mosaic:common.keyword___")}
						autoFocus={true}
						onChange={onKeywordChange}
						fieldSize="100%"
						value={keyword}
						aria-label={t("mosaic:common.keyword___")}
					/>
					{columnOptions.length ? (
						<CheckboxList
							options={columnOptions}
							checked={checkedOptions}
							onChange={onColumnsChange}
						/>
					) : (
						<NoColumns>
							<MutedText>
								No columns
								{" "}
								{keyword ? "match the given keyword" : "to display"}
							</MutedText>
						</NoColumns>
					)}
				</div>
				<div className="right">
					<ColumnTitle>{t("mosaic:DataView.column_order")}</ColumnTitle>
					<DataViewColumnDrawerColumns
						activeColumns={activeColumns}
						allColumns={props.allColumns}
						onChange={setActiveColumns}
					/>
				</div>
			</StyledWrapper>
		</div>
	);
}

export default DataViewColumnDrawerContent;
