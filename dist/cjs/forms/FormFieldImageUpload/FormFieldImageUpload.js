"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var lodash_1 = require("lodash");
// Components
var Button_1 = __importDefault(require("../../components/Button"));
var ImageUploadCanvas_1 = __importDefault(require("./ImageUploadCanvas"));
var MenuFormFieldCard_1 = __importDefault(require("../MenuFormFieldCard"));
// Styles
var FormFieldImageUpload_styled_1 = require("./FormFieldImageUpload.styled");
var FormFieldImageUpload = function (props) {
    var _a, _b, _c;
    var fieldDef = props.fieldDef, onChange = props.onChange, value = props.value;
    // State variables
    var _d = (0, react_1.useState)(false), isOver = _d[0], setIsOver = _d[1];
    var _e = (0, react_1.useState)({}), files = _e[0], setFiles = _e[1];
    var _f = (0, react_1.useState)(null), height = _f[0], setHeight = _f[1];
    var _g = (0, react_1.useState)(null), width = _g[0], setWidth = _g[1];
    var _h = (0, react_1.useState)(false), focusMode = _h[0], setFocusMode = _h[1];
    var _j = (0, react_1.useState)({
        x: null,
        y: null
    }), imageCoordinates = _j[0], setImageCoordinates = _j[1];
    var fileInputField = (0, react_1.useRef)(null);
    /**
     * @param newFiles
     * @returns the added files
     */
    var addNewImage = function (newFiles) {
        for (var _i = 0, newFiles_1 = newFiles; _i < newFiles_1.length; _i++) {
            var file = newFiles_1[_i];
            return { file: file };
        }
        return __assign({}, files);
    };
    /**
     *  Triggers a click on the input of type file
     *  to prompt the file selection.
     */
    var uploadFiles = function () {
        fileInputField.current.click();
    };
    /**
     * Executed when a new file is uploaded.
     * @param e
     */
    var handleNewFileUpload = function (e) {
        var imgFile = e.target.files;
        var isImageFile = imgFile[0].type.split("/")[0] === "image";
        if (!isImageFile) {
            return;
        }
        if (imgFile.length) {
            var uploadedImage = addNewImage(imgFile);
            var file = uploadedImage.file;
            setFiles(uploadedImage);
            onChange &&
                onChange(__assign(__assign({}, value), { imgName: file.name, size: file.size, type: file.type }));
        }
    };
    /**
     *  Sets focus mode to true to display the canvas
     *  element and the set focus button.
     */
    var handleView = function () {
        setFocusMode(true);
    };
    /**
     *  Executes the set focus callback and passes
     *  the image coordinates to the parent component.
     */
    var setFocus = function () {
        var _a, _b;
        onChange && onChange(__assign(__assign({}, value), { imgCoords: imageCoordinates }));
        ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.handleSetFocus) &&
            ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.handleSetFocus());
        setFocusMode(false);
    };
    /**
     * Sets the image coordinates when the user
     * clicks on the canvas component.
     * @param mouseCoordinates
     */
    var mousePosition = function (mouseCoordinates) {
        setImageCoordinates(mouseCoordinates);
    };
    /**
     * When the remove button is click the files
     * uploaded are empty ahd the isOver flagged is
     * set to false to show the upload view.
     */
    var removeFile = function () {
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
    var dragOver = function (e) {
        e.preventDefault();
    };
    /**
     * When a file that's being dragged enters into
     * the drop zone the isOver state is changed
     * to apply styles conditionally.
     * @param e
     */
    var dragEnter = function (e) {
        e.preventDefault();
        setIsOver(true);
    };
    /**
     * When the drop zone is leaved the isOver state
     * is changed to apply styles conditionally.
     * @param e
     */
    var dragLeave = function (e) {
        e.preventDefault();
        setIsOver(false);
    };
    /**
     * When a file is dropped, the file state is set with the
     * file dropped and the uploadImage callback is triggered.
     * @param e
     */
    var fileDrop = function (e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        var droppedFiles = e.dataTransfer.files;
        var isImageFile = ((_a = droppedFiles[0]) === null || _a === void 0 ? void 0 : _a.type.split("/")[0]) === "image";
        if (droppedFiles.length > 1) {
            setIsOver(false);
            return;
        }
        if (!isImageFile) {
            setIsOver(false);
            return;
        }
        if (droppedFiles.length) {
            var uploadedImage = addNewImage(droppedFiles);
            var file = uploadedImage.file;
            setFiles(droppedFiles);
            onChange &&
                onChange(__assign(__assign(__assign({}, value), { imgName: file.name, size: file.size, type: file.type }), file));
        }
    };
    /**
     * Sets the image dimensions.
     * @param param0
     */
    var onImgLoad = function (_a) {
        var img = _a.target;
        var imageWidth = img.naturalWidth;
        var imageHeight = img.naturalHeight;
        setHeight(imageHeight);
        setWidth(imageWidth);
    };
    /**
     * Call onChange function once the component is mounted
     * to update the form state with the image height and width
     */
    (0, react_1.useEffect)(function () {
        if (!(0, lodash_1.isEmpty)(files) && onChange) {
            onChange(__assign(__assign({}, value), { height: height, width: width }));
        }
    }, [files, height, width]);
    return (React.createElement(React.Fragment, null, !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) ? (React.createElement("div", null, (0, lodash_1.isEmpty)(files) ? (React.createElement(FormFieldImageUpload_styled_1.DragAndDropContainer, { isOver: isOver, onDragOver: dragOver, onDragEnter: dragEnter, onDragLeave: dragLeave, onDrop: fileDrop },
        isOver ? (React.createElement(FormFieldImageUpload_styled_1.DragAndDropSpan, { isOver: isOver }, "Release and Drop")) : (React.createElement(React.Fragment, null,
            React.createElement(FormFieldImageUpload_styled_1.DragAndDropSpan, { isOver: isOver }, "Drag & Drop files here or"),
            React.createElement(FormFieldImageUpload_styled_1.UploadButton, { color: "gray", variant: "outlined", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, label: "UPLOAD FILES", buttonType: "secondary", onClick: uploadFiles, muiAttrs: { disableRipple: true } }))),
        React.createElement(FormFieldImageUpload_styled_1.FileInput, { accept: "image/*", "data-testid": "input-file-test", ref: fileInputField, onChange: handleNewFileUpload, title: "", type: "file", value: "" }))) : (React.createElement(React.Fragment, null,
        React.createElement(FormFieldImageUpload_styled_1.ImageCard, null,
            React.createElement(FormFieldImageUpload_styled_1.ImageColumn, null,
                Object.keys(files).map(function (fileName) {
                    var file = files[fileName];
                    return (React.createElement(FormFieldImageUpload_styled_1.ImgLoaded, { key: fileName, alt: "".concat(fileName, " preview"), height: 168, onLoad: onImgLoad, src: URL.createObjectURL(file), width: 257 }));
                }),
                focusMode && (React.createElement(ImageUploadCanvas_1["default"], { mousePosition: mousePosition }))),
            focusMode ? (React.createElement(FormFieldImageUpload_styled_1.SetFocusSpan, null, "Click on the image to set the focus point")) : (React.createElement(FormFieldImageUpload_styled_1.ImagePropertiesColumn, null,
                React.createElement(FormFieldImageUpload_styled_1.Row, null,
                    React.createElement(FormFieldImageUpload_styled_1.SizeLabel, null, "Size"),
                    React.createElement(FormFieldImageUpload_styled_1.SizeValue, null,
                        width,
                        "x",
                        height)))),
            ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.options) && !focusMode && (React.createElement(FormFieldImageUpload_styled_1.MenuColumn, { "data-testid": "menu-container-test" },
                React.createElement(MenuFormFieldCard_1["default"], { options: (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.options }))),
            React.createElement(FormFieldImageUpload_styled_1.ButtonsContainer, null,
                focusMode && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings.handleSetFocus) ? (React.createElement(Button_1["default"], { color: "teal", variant: "text", label: "Set Focus", onClick: setFocus, muiAttrs: { disableRipple: true } })) : (((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.handleSetFocus) ? React.createElement(Button_1["default"], { color: "teal", variant: "text", label: "View", onClick: handleView, muiAttrs: { disableRipple: true } }) : null),
                React.createElement(Button_1["default"], { color: "red", variant: "text", label: "Remove", onClick: removeFile, muiAttrs: { disableRipple: true } }))))))) : (React.createElement(FormFieldImageUpload_styled_1.DragAndDropContainer, null,
        React.createElement(FormFieldImageUpload_styled_1.StyledCircularProgress, { "data-testid": "circular-progress-test" }),
        React.createElement(FormFieldImageUpload_styled_1.DragAndDropSpan, { isOver: isOver }, "Loading Image")))));
};
exports["default"] = (0, react_1.memo)(FormFieldImageUpload);
