import * as React from "react";
import { useEffect, ReactElement } from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";

import {
	useMosaicTranslation,
	useMosaicSettings,
	MosaicContext,
} from "../";

const Table = styled.table`
	border-collapse: collapse;

	& th {
		text-align: left;
		border: 1px solid gray;
		padding: 5px;
	}

	& td {
		border: 1px solid gray;
		padding: 5px;
	}
`;

function InnerComponent() {
	const { t } = useMosaicTranslation();

	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>Key</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>mosaic:common.save</td>
						<td>{t("mosaic:common.save")}</td>
					</tr>
					<tr>
						<td>app:TestPrefix.key</td>
						<td>{t("app:TestPrefix.key")}</td>
					</tr>
					<tr>
						<td>app:TestPrefix.english_only</td>
						<td>{t("app:TestPrefix.english_only")}</td>
					</tr>
					<tr>
						<td>app:TestPrefix.spanish_only</td>
						<td>{t("app:TestPrefix.spanish_only")}</td>
					</tr>
					<tr>
						<td>app:TestPrefix.bogus</td>
						<td>{t("app:TestPrefix.bogus")}</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default {
	title : "Utils/i18n",
	decorators : [withKnobs],
};

const localeData = {
	en : {
		TestPrefix : {
			key: "In english",
			english_only: "English Only",
		},
	},
	es : {
		TestPrefix : {
			key : "In spanish",
			spanish_only : "Spanish Only",
		},
	},
};

export function example(): ReactElement {
	const locale = select("locale", { en : "en", es : "es", cimode : "cimode" }, "en");

	const mosaicSettings = useMosaicSettings();
	mosaicSettings.i18n.addResourceBundle("en", "app", localeData.en, true, false);
	mosaicSettings.i18n.addResourceBundle("es", "app", localeData.es, true, false);

	useEffect(() => {
		if (mosaicSettings.i18n.language !== locale) {
			mosaicSettings.i18n.changeLanguage(locale);
		}
	}, [locale]);

	return (
		<MosaicContext.Provider value={mosaicSettings}>
			<div>
				<>
					language:
					{" "}
					{locale}
					<br/>
					fallbackLng:
					{" "}
					{mosaicSettings.i18n.options.fallbackLng}
				</>
			</div>
			<hr/>
			<InnerComponent/>
			<hr/>
			<div>Test Data</div>
			<pre>
				{JSON.stringify(localeData, null, "\t")}
			</pre>
		</MosaicContext.Provider>
	);
}
