import * as React from "react";
import { useMemo, useCallback, ReactElement } from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { xor } from "lodash";

import Checkbox from "@root/components/Checkbox";
import { BodyText } from "@root/components/Typography";
import { useStateRef } from "@root/utils/reactTools";

const StyledDiv = styled.div`
	& > ul {
		padding: 0;
	}
	
	& > ul > .listItem {
		padding-top: 0px;
		padding-bottom: 0px;
	}
	
	& > ul > .listItem > .listItemIcon {
		min-width: auto;
	}
`

interface Option {
	label: string
	value: string
}

export interface CheckboxListProps {
	checked: string[]
	options: Option[]
	onChange(checked: string[]): void
}

function CheckboxList(props: CheckboxListProps): ReactElement {
	const checkedRef = useStateRef(props.checked);

	const handleToggle = useCallback((value: string) => () => {
		// toggle the item in the array
		const newChecked = xor(checkedRef.current, [value]);
		props.onChange(newChecked);
	}, [checkedRef, props.onChange]);

	const callbacks = useMemo(() => {
		return props.options.map(option => handleToggle(option.value));
	}, [props.options, handleToggle]);
	
	return (
		<StyledDiv>
			<List
				dense
			>
				{
					props.options.map((option, i) => {
						const checked = props.checked.indexOf(option.value) !== -1;
						
						return (
							<ListItem
								className="listItem"
								key={option.value}
								dense
								button
								onClick={callbacks[i]}
							>
								<ListItemIcon className="listItemIcon">
									<Checkbox
										className={checked ? "checked" : ""}
										edge="start"
										checked={checked}
									/>
								</ListItemIcon>
								<BodyText>{option.label}</BodyText>
							</ListItem>
						)
					})
				}
			</List>
		</StyledDiv>
	)
}

export default CheckboxList;