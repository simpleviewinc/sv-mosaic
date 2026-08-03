import * as React from "react";
import type { ReactElement } from "react";
import PickerPanel, { PickerPanelActive, PickerPanelSubtitle } from "@simpleview/sv-mosaic/components/PickerPanel";
import { mockOptions } from "@simpleview/sv-mosaic/mock";
import Chip from "@simpleview/sv-mosaic/components/Chip";
import { Column } from "@simpleview/sv-mosaic/components/common";
import type { MosaicLabelValue } from "@simpleview/sv-mosaic";

export default {
	title: "Components/PickerPanel",
};

export const Playground = ({ title, optionsSubtitle, activeSubtitle }: typeof Playground.args): ReactElement => {
	const [checked, setChecked] = React.useState<MosaicLabelValue[]>([]);

	const onOptionRemove = (option: MosaicLabelValue) => {
		setChecked(checked => checked.filter(item => item.value !== option.value));
	};

	return (
		<div style={{ height: "80vh" }}>
			<PickerPanel
				title={title}
				optionsSubtitle={optionsSubtitle}
				options={mockOptions}
				onSave={(checked) => alert(`Save checked: ${JSON.stringify(checked)}`)}
				onCancel={() => alert("Cancel")}
				activePanel={(
					<PickerPanelActive>
						{activeSubtitle && (
							<PickerPanelSubtitle>Checked Options</PickerPanelSubtitle>
						)}
						<Column $align="start" $gap={[3]}>
							{checked.map(option => (
								<Chip
									key={option.value}
									label={option.label}
									onDelete={() => onOptionRemove(option)}
								/>
							))}
						</Column>
					</PickerPanelActive>
				)}
				onLoadMore={() => alert("Load more options")}
				onCreateNew={(value) => alert(`Create new option for "${value}"`)}
			/>
		</div>
	);
};

Playground.args = {
	title: "Picker panel",
	optionsSubtitle: "Available Options",
	activeSubtitle: "Checked Options",
};

Playground.argTypes = {
	title: {
		name: "Title",
	},
	optionsSubtitle: {
		name: "Options Subtitle",
	},
	activeSubtitle: {
		name: "Active Options Subtitle",
	},
};
