import * as React from "react";
import { memo, useEffect, useRef, useState } from "react";
import { isEmpty } from "lodash";
// Components
import Button from "../../components/Button";
import ImageUploadCanvas from "./ImageUploadCanvas";
import MenuFormFieldCard from "../MenuFormFieldCard";
// Styles
import { ButtonsContainer, DragAndDropContainer, DragAndDropSpan, FileInput, ImageCard, ImageColumn, ImagePropertiesColumn, ImgLoaded, MenuColumn, Row, SetFocusSpan, SizeLabel, SizeValue, StyledCircularProgress, UploadButton, } from "./FormFieldImageUpload.styled";
const FormFieldImageUpload = (props) => {
    var _a, _b, _c;
    const { fieldDef, onChange, value } = props;
    // State variables
    const [isOver, setIsOver] = useState(false);
    const [files, setFiles] = useState({});
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [focusMode, setFocusMode] = useState(false);
    const [imageCoordinates, setImageCoordinates] = useState({
        x: null,
        y: null,
    });
    const fileInputField = useRef(null);
    /**
     * @param newFiles
     * @returns the added files
     */
    const addNewImage = (newFiles) => {
        for (const file of newFiles) {
            return { file };
        }
        return { ...files };
    };
    /**
     *  Triggers a click on the input of type file
     *  to prompt the file selection.
     */
    const uploadFiles = () => {
        fileInputField.current.click();
    };
    /**
     * Executed when a new file is uploaded.
     * @param e
     */
    const handleNewFileUpload = (e) => {
        const { files: imgFile } = e.target;
        const isImageFile = imgFile[0].type.split("/")[0] === "image";
        if (!isImageFile) {
            return;
        }
        if (imgFile.length) {
            const uploadedImage = addNewImage(imgFile);
            const file = uploadedImage.file;
            setFiles(uploadedImage);
            onChange &&
                onChange({
                    ...value,
                    imgName: file.name,
                    size: file.size,
                    type: file.type,
                });
        }
    };
    /**
     *  Sets focus mode to true to display the canvas
     *  element and the set focus button.
     */
    const handleView = () => {
        setFocusMode(true);
    };
    /**
     *  Executes the set focus callback and passes
     *  the image coordinates to the parent component.
     */
    const setFocus = () => {
        var _a, _b;
        onChange && onChange({ ...value, imgCoords: imageCoordinates });
        ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleSetFocus) &&
            ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleSetFocus());
        setFocusMode(false);
    };
    /**
     * Sets the image coordinates when the user
     * clicks on the canvas component.
     * @param mouseCoordinates
     */
    const mousePosition = (mouseCoordinates) => {
        setImageCoordinates(mouseCoordinates);
    };
    /**
     * When the remove button is click the files
     * uploaded are empty ahd the isOver flagged is
     * set to false to show the upload view.
     */
    const removeFile = () => {
        setFiles({});
        onChange(undefined);
        setIsOver(false);
        setFocusMode(false);
    };
    /**
     * Executed when a file that's being
     * dragged is over the drop zone.
     * @param e
     */
    const dragOver = (e) => {
        e.preventDefault();
    };
    /**
     * When a file that's being dragged enters into
     * the drop zone the isOver state is changed
     * to apply styles conditionally.
     * @param e
     */
    const dragEnter = (e) => {
        e.preventDefault();
        setIsOver(true);
    };
    /**
     * When the drop zone is leaved the isOver state
     * is changed to apply styles conditionally.
     * @param e
     */
    const dragLeave = (e) => {
        e.preventDefault();
        setIsOver(false);
    };
    /**
     * When a file is dropped, the file state is set with the
     * file dropped and the uploadImage callback is triggered.
     * @param e
     */
    const fileDrop = (e) => {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        const droppedFiles = e.dataTransfer.files;
        const isImageFile = ((_a = droppedFiles[0]) === null || _a === void 0 ? void 0 : _a.type.split("/")[0]) === "image";
        if (droppedFiles.length > 1) {
            setIsOver(false);
            return;
        }
        if (!isImageFile) {
            setIsOver(false);
            return;
        }
        if (droppedFiles.length) {
            const uploadedImage = addNewImage(droppedFiles);
            const file = uploadedImage.file;
            setFiles(droppedFiles);
            onChange &&
                onChange({
                    ...value,
                    imgName: file.name,
                    size: file.size,
                    type: file.type,
                    ...file,
                });
        }
    };
    /**
     * Sets the image dimensions.
     * @param param0
     */
    const onImgLoad = ({ target: img }) => {
        const imageWidth = img.naturalWidth;
        const imageHeight = img.naturalHeight;
        setHeight(imageHeight);
        setWidth(imageWidth);
    };
    /**
     * Call onChange function once the component is mounted
     * to update the form state with the image height and width
     */
    useEffect(() => {
        if (!isEmpty(files) && onChange) {
            onChange({ ...value, height, width });
        }
    }, [files, height, width]);
    return (React.createElement(React.Fragment, null, !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) ? (React.createElement("div", null, isEmpty(files) ? (React.createElement(DragAndDropContainer, { isOver: isOver, onDragOver: dragOver, onDragEnter: dragEnter, onDragLeave: dragLeave, onDrop: fileDrop },
        isOver ? (React.createElement(DragAndDropSpan, { isOver: isOver }, "Release and Drop")) : (React.createElement(React.Fragment, null,
            React.createElement(DragAndDropSpan, { isOver: isOver }, "Drag & Drop files here or"),
            React.createElement(UploadButton, { color: "gray", variant: "outlined", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, label: "UPLOAD FILES", buttonType: "secondary", onClick: uploadFiles, muiAttrs: { disableRipple: true } }))),
        React.createElement(FileInput, { accept: "image/*", "data-testid": "input-file-test", ref: fileInputField, onChange: handleNewFileUpload, title: "", type: "file", value: "" }))) : (React.createElement(React.Fragment, null,
        React.createElement(ImageCard, null,
            React.createElement(ImageColumn, null,
                Object.keys(files).map((fileName) => {
                    const file = files[fileName];
                    return (React.createElement(ImgLoaded, { key: fileName, alt: `${fileName} preview`, height: 168, onLoad: onImgLoad, src: URL.createObjectURL(file), width: 257 }));
                }),
                focusMode && (React.createElement(ImageUploadCanvas, { mousePosition: mousePosition }))),
            focusMode ? (React.createElement(SetFocusSpan, null, "Click on the image to set the focus point")) : (React.createElement(ImagePropertiesColumn, null,
                React.createElement(Row, null,
                    React.createElement(SizeLabel, null, "Size"),
                    React.createElement(SizeValue, null,
                        width,
                        "x",
                        height)))),
            ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.options) && !focusMode && (React.createElement(MenuColumn, { "data-testid": "menu-container-test" },
                React.createElement(MenuFormFieldCard, { options: (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.options }))),
            React.createElement(ButtonsContainer, null,
                focusMode && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings.handleSetFocus) ? (React.createElement(Button, { color: "teal", variant: "text", label: "Set Focus", onClick: setFocus, muiAttrs: { disableRipple: true } })) : (((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.handleSetFocus) ? React.createElement(Button, { color: "teal", variant: "text", label: "View", onClick: handleView, muiAttrs: { disableRipple: true } }) : null),
                React.createElement(Button, { color: "red", variant: "text", label: "Remove", onClick: removeFile, muiAttrs: { disableRipple: true } }))))))) : (React.createElement(DragAndDropContainer, null,
        React.createElement(StyledCircularProgress, { "data-testid": "circular-progress-test" }),
        React.createElement(DragAndDropSpan, { isOver: isOver }, "Loading Image")))));
};
export default memo(FormFieldImageUpload);
