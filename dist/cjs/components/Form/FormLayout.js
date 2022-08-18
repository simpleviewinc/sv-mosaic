"use strict";
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
var formUtils_1 = require("./formUtils");
// Components
var Section_1 = __importDefault(require("./Section"));
var FormLayout = (0, react_1.forwardRef)(function (props, ref) {
    var state = props.state, dispatch = props.dispatch, fields = props.fields, sections = props.sections;
    var sectionRef = ref;
    var layout = (0, react_1.useMemo)(function () {
        return (0, formUtils_1.generateLayout)({ sections: sections, fields: fields });
    }, [sections, fields]);
    return (React.createElement(React.Fragment, null, layout === null || layout === void 0 ? void 0 : layout.map(function (section, i) { return (React.createElement(Section_1["default"], { ref: function (el) { return sectionRef.current[i] = el; }, key: "section-".concat(i), title: section.title, sectionIdx: i, description: section.description, fieldsDef: fields, rows: section.fields, state: state, dispatch: dispatch })); })));
});
FormLayout.displayName = "FormLayout";
exports["default"] = (0, react_1.memo)(FormLayout);
