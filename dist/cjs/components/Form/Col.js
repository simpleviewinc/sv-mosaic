"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var formActions_1 = require("./formActions");
var FormFieldText_1 = __importDefault(require("../../forms/FormFieldText"));
var FormFieldTextArea_1 = __importDefault(require("../../forms/FormFieldTextArea"));
var FormFieldCheckbox_1 = __importDefault(require("../../forms/FormFieldCheckbox"));
var FormFieldChipSingleSelect_1 = __importDefault(require("../../forms/FormFieldChipSingleSelect"));
var FormFieldDropdownSingleSelection_1 = __importDefault(require("../../forms/FormFieldDropdownSingleSelection"));
var FormFieldPhoneSelectionDropdown_1 = __importDefault(require("../../forms/FormFieldPhoneSelectionDropdown"));
var FormFieldRadio_1 = __importDefault(require("../../forms/FormFieldRadio"));
var FormFieldToggleSwitch_1 = __importDefault(require("../../forms/FormFieldToggleSwitch"));
var Field_1 = __importDefault(require("../Field"));
var FormFieldImageVideoLinkDocumentBrowsing_1 = __importDefault(require("../../forms/FormFieldImageVideoLinkDocumentBrowsing"));
var FormFieldColorPicker_1 = __importDefault(require("../../forms/FormFieldColorPicker"));
var DateField_1 = __importDefault(require("../../forms/FormFieldDate/DateField"));
var FormFieldAddress_1 = __importDefault(require("../../forms/FormFieldAddress"));
var FormFieldTable_1 = __importDefault(require("../../forms/FormFieldTable"));
var FormFieldTextEditor_1 = __importDefault(require("../../forms/FormFieldTextEditor"));
var FormFieldAdvancedSelection_1 = __importDefault(require("../../forms/FormFieldAdvancedSelection"));
var FormFieldMapCoordinates_1 = __importDefault(require("../../forms/FormFieldMapCoordinates"));
var FormFieldImageUpload_1 = __importDefault(require("../../forms/FormFieldImageUpload"));
var theme_1 = require("../../theme");
var StyledCol = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: calc(100% / ", ");\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: calc(100% / ", ");\n"])), function (pr) { return pr.colsInRow; });
var Col = function (props) {
    var col = props.col, state = props.state, fieldsDef = props.fieldsDef, dispatch = props.dispatch, colsInRow = props.colsInRow, colIdx = props.colIdx, rowIdx = props.rowIdx, sectionIdx = props.sectionIdx;
    var componentMap = (0, react_1.useMemo)(function () { return ({
        text: FormFieldText_1["default"],
        textArea: FormFieldTextArea_1["default"],
        checkbox: FormFieldCheckbox_1["default"],
        chip: FormFieldChipSingleSelect_1["default"],
        dropdown: FormFieldDropdownSingleSelection_1["default"],
        phone: FormFieldPhoneSelectionDropdown_1["default"],
        radio: FormFieldRadio_1["default"],
        toggleSwitch: FormFieldToggleSwitch_1["default"],
        imageVideoDocumentLink: FormFieldImageVideoLinkDocumentBrowsing_1["default"],
        color: FormFieldColorPicker_1["default"],
        date: DateField_1["default"],
        address: FormFieldAddress_1["default"],
        table: FormFieldTable_1["default"],
        textEditor: FormFieldTextEditor_1["default"],
        advancedSelection: FormFieldAdvancedSelection_1["default"],
        mapCoordinates: FormFieldMapCoordinates_1["default"],
        imageUpload: FormFieldImageUpload_1["default"]
    }); }, []);
    var doneTypingInterval = 300;
    var typingTimer;
    var sendValidateField = function (curr) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dispatch(formActions_1.formActions.validateField({ name: curr.name }))];
                case 1:
                    _a.sent();
                    if (curr.pairedFields)
                        curr.pairedFields.forEach(function (pairedField) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, dispatch(formActions_1.formActions.validateField({ name: pairedField }))];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    return [2 /*return*/];
            }
        });
    }); };
    var onChangeMap = (0, react_1.useMemo)(function () {
        return fieldsDef.reduce(function (prev, curr) {
            prev[curr.name] = function (value) {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, dispatch(formActions_1.formActions.setFieldValue({
                                    name: curr.name,
                                    value: value
                                }))];
                            case 1:
                                _a.sent();
                                clearTimeout(typingTimer);
                                typingTimer = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, sendValidateField(curr)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                }); }); }, doneTypingInterval);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            return prev;
        }, {});
    }, [fieldsDef, state.pairedFields]);
    /* const onBlurMap = useMemo(() => {
        return fieldsDef.reduce((prev, curr) => {
            prev[curr.name] = async function () {
                await dispatch(
                    formActions.validateField({ name: curr.name })
                );

                if (curr.pairedFields)
                    curr.pairedFields.forEach(async pairedField => {
                        await dispatch(
                            formActions.validateField({ name: pairedField })
                        );
                    });
            };

            return prev;
        }, {});
    }, [fieldsDef, state.pairedFields]); */
    return (React.createElement(StyledCol, { colsInRow: colsInRow }, col.map(function (field, i) {
        var currentField = fieldsDef === null || fieldsDef === void 0 ? void 0 : fieldsDef.find(function (fieldDef) {
            return field === fieldDef.name;
        });
        if (!currentField) {
            throw new Error("No field declared for field name '".concat(field, "' in section ").concat(sectionIdx, ", row ").concat(rowIdx, ", column ").concat(colIdx, "."));
        }
        var type = currentField.type, fieldProps = __rest(currentField, ["type"]);
        var Component = typeof type === "string" ? componentMap[type] : type;
        if (!Component) {
            throw new Error("Invalid type ".concat(type));
        }
        var onChange = onChangeMap[fieldProps.name];
        // const onBlur = onBlurMap[fieldProps.name];
        var name = fieldProps.name;
        var value = (state === null || state === void 0 ? void 0 : state.data[fieldProps.name]) || "";
        var error = (state === null || state === void 0 ? void 0 : state.errors[fieldProps.name]) || "";
        var maxSize;
        var SizeSelected = theme_1.Sizes[currentField === null || currentField === void 0 ? void 0 : currentField.size] ? theme_1.Sizes[currentField === null || currentField === void 0 ? void 0 : currentField.size] : currentField === null || currentField === void 0 ? void 0 : currentField.size;
        if (currentField === null || currentField === void 0 ? void 0 : currentField.size)
            switch (colsInRow) {
                case 1:
                    maxSize = SizeSelected <= theme_1.Sizes.lg ? SizeSelected : theme_1.Sizes.lg;
                    break;
                case 2:
                    maxSize = SizeSelected <= theme_1.Sizes.md ? SizeSelected : theme_1.Sizes.md;
                    break;
                case 3:
                    maxSize = SizeSelected <= theme_1.Sizes.sm ? SizeSelected : theme_1.Sizes.sm;
                    break;
                default:
                    break;
            }
        var children = (0, react_1.useMemo)(function () { return (React.createElement(Component, { fieldDef: __assign(__assign({}, currentField), { size: maxSize }), name: name, value: value, error: error, onChange: onChange, 
            // onBlur={onBlur}
            key: "".concat(name, "_").concat(i) })); }, [value, error, onChange, currentField]);
        return (typeof type === "string" && componentMap[type]) ? (React.createElement(Field_1["default"], { key: "".concat(name, "_").concat(i), fieldDef: __assign(__assign({}, currentField), { size: maxSize }), value: value, error: error, colsInRow: colsInRow }, children))
            :
                (children);
    })));
};
exports["default"] = (0, react_1.memo)(Col);
var templateObject_1;
