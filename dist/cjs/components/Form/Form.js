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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var Form_styled_1 = require("./Form.styled");
var formActions_1 = require("./formActions");
var FormLayout_1 = __importDefault(require("./FormLayout"));
var TopComponent_1 = __importDefault(require("../../forms/TopComponent"));
var TopComponent_styled_1 = require("../../forms/TopComponent/TopComponent.styled");
var FormNav_1 = __importDefault(require("../../forms/FormNav"));
var useWindowResizer_1 = require("../../utils/useWindowResizer");
var bulkActionsUtils_1 = require("../DataView/utils/bulkActionsUtils");
var Dialog_1 = __importDefault(require("../Dialog"));
var Form = function (props) {
    var buttons = props.buttons, type = props.type, state = props.state, title = props.title, fields = props.fields, sections = props.sections, dispatch = props.dispatch, onCancel = props.onCancel, dialogOpen = props.dialogOpen, description = props.description, getFormValues = props.getFormValues, handleDialogClose = props.handleDialogClose;
    var view = (0, useWindowResizer_1.useWindowResizer)(type).view;
    var sectionsRef = (0, react_1.useRef)([]);
    var _a = (0, react_1.useState)([]), sectionsRefs = _a[0], setSectionsRefs = _a[1];
    (0, react_1.useEffect)(function () {
        setSectionsRefs(sectionsRef.current);
    }, []);
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        var registerFields = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dispatch(formActions_1.formActions.init({
                            fields: fields
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        if (isMounted) {
            registerFields();
        }
        return function () {
            isMounted = false;
        };
    }, [fields]);
    (0, react_1.useEffect)(function () {
        var loadFormValues = function () { return __awaiter(void 0, void 0, void 0, function () {
            var values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!getFormValues) return [3 /*break*/, 2];
                        return [4 /*yield*/, getFormValues()];
                    case 1:
                        values = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        fields.forEach(function (field) {
                            var _a;
                            if (field.defaultValue) {
                                values = __assign(__assign({}, values), (_a = {}, _a[field.name] = field.defaultValue, _a));
                            }
                        });
                        _a.label = 3;
                    case 3:
                        if (!values) return [3 /*break*/, 5];
                        return [4 /*yield*/, dispatch(formActions_1.formActions.setFormValues({
                                values: values
                            }))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        loadFormValues();
    }, [getFormValues]);
    var cancel = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    _a = onCancel;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, onCancel()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    return [2 /*return*/];
            }
        });
    }); };
    var filteredButtons = (0, react_1.useMemo)(function () { return (buttons === null || buttons === void 0 ? void 0 : buttons.filter(function (button) { return (0, bulkActionsUtils_1.filterAction)(button); })); }, [buttons]);
    if (!view) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { position: "relative" } },
            state.disabled &&
                React.createElement(Form_styled_1.StyledDisabledForm, null),
            React.createElement(Form_styled_1.StyledForm, null,
                title &&
                    React.createElement(TopComponent_1["default"], { title: title, type: type, description: description, onCancel: onCancel ? function (e) { return cancel(e); } : null, sections: sections, view: view, buttons: filteredButtons, sectionsRefs: sectionsRefs }),
                view === "BIG_DESKTOP" && sections ? (React.createElement(TopComponent_styled_1.Row, null,
                    sections &&
                        React.createElement(FormNav_1["default"], { sectionsRefs: sectionsRefs, sections: sections }),
                    React.createElement(TopComponent_styled_1.FormContent, { view: view, sections: sections },
                        React.createElement(FormLayout_1["default"], { ref: sectionsRef, state: state, dispatch: dispatch, fields: fields, sections: sections })))) : (React.createElement(TopComponent_styled_1.FormContent, { view: view, sections: sections },
                    React.createElement(FormLayout_1["default"], { ref: sectionsRef, state: state, dispatch: dispatch, fields: fields, sections: sections }))))),
        type === "drawer" &&
            React.createElement(Dialog_1["default"], { dialogTitle: 'Are you sure you want to leave?', open: dialogOpen, primaryAction: function () { return handleDialogClose(true); }, primaryBtnLabel: 'Yes, leave', secondaryAction: function () { return handleDialogClose(false); }, secondaryBtnLabel: 'No, stay' }, "You have unsaved changes. If you leave all your changes will be lost.")));
};
exports["default"] = (0, react_1.memo)(Form);
