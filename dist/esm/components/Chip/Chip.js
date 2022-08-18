import * as React from "react";
// Material UI
import ClearIcon from "@mui/icons-material/Clear";
import { StyledChip, StyledDeletableChip, StyledLabel } from "./Chip.styled";
const Chip = (props) => {
    const { label, required, disabled, selected, onDelete, onClick } = props;
    return onDelete ? (React.createElement(StyledDeletableChip, { label: React.createElement(StyledLabel, null, label), required: required, disabled: disabled, selected: selected, deleteIcon: React.createElement(ClearIcon, { "data-testid": 'delete-icon-test-id' }), onDelete: onDelete })) : (React.createElement(StyledChip, { label: React.createElement(StyledLabel, null, label), required: required, disabled: disabled, selected: selected, clickable: true, disableRipple: true, onClick: onClick }));
};
export default Chip;
