import * as React from "react";
import { memo, useEffect, useState } from "react";
// Components
import AddIcon from "@mui/icons-material/Add";
import Button from "../../components/Button";
import Drawer from "../../components/Drawer";
import AdvancedSelectionDrawer from "./AdvancedSelectionDrawer";
import ChipList from "./ChipList";
// Styles
import { AdvancedSelectionWrapper, } from "./AdvancedSelection.styled";
import { BREAKPOINTS } from "../../theme/theme";
const FormFieldAdvancedSelection = (props) => {
    var _a;
    const { value, onBlur, onChange, fieldDef, } = props;
    // State variables
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [hasUnsavedChanges, setUnsavedChanges] = useState(false);
    const [dialogOpen, setIsDialogOpen] = useState(false);
    useEffect(() => {
        const setResponsiveness = () => {
            setIsMobileView(window.innerWidth < BREAKPOINTS.mobile);
        };
        setResponsiveness();
        window.addEventListener("resize", setResponsiveness);
        return () => {
            window.removeEventListener("resize", setResponsiveness);
        };
    }, []);
    /**
   * Sets the open state of the modal to true.
   */
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    /**
   * Sets the open state of the modal to false.
   */
    const handleClose = async (save = false) => {
        if (typeof save === "boolean" && save) {
            setUnsavedChanges(false);
            setIsModalOpen(false);
            if (onBlur)
                await onBlur();
        }
        else if (hasUnsavedChanges)
            setIsDialogOpen(true);
        else {
            setUnsavedChanges(false);
            setIsModalOpen(false);
            if (onBlur)
                await onBlur();
        }
    };
    const handleDialogClose = async (close) => {
        if (close) {
            await handleClose(true);
        }
        setIsDialogOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        value.length > 0 && !isModalOpen ? (React.createElement(AdvancedSelectionWrapper, null,
            React.createElement(Button, { color: "teal", variant: "text", label: "Add Element", onClick: handleOpenModal, muiAttrs: { disableRipple: true }, mIcon: AddIcon, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, attrs: { style: { marginBottom: "8px" } } }),
            React.createElement(ChipList, { fieldDef: {
                    inputSettings: {
                        isModalOpen,
                        isMobileView,
                        selectedOptions: value,
                        getSelected: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.getSelected,
                        deleteSelectedOption: onChange,
                    },
                    disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled,
                } }))) : (React.createElement(Button, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, color: "gray", variant: "outlined", label: "ADD ELEMENT", onClick: handleOpenModal, muiAttrs: { disableRipple: true } })),
        React.createElement(Drawer, { open: isModalOpen, onClose: handleClose },
            React.createElement(AdvancedSelectionDrawer, { value: value, fieldDef: fieldDef, onChange: onChange, isModalOpen: isModalOpen, isMobileView: isMobileView, handleClose: handleClose, handleUnsavedChanges: (e) => setUnsavedChanges(e), dialogOpen: dialogOpen, handleDialogClose: handleDialogClose }))));
};
export default memo(FormFieldAdvancedSelection);
