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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.useThunkReducer = exports.joinReducers = exports.generateLayout = exports.useForm = exports.coreReducer = void 0;
var react_1 = require("react");
function coreReducer(state, action) {
    var _a, _b, _c, _d, _e;
    switch (action.type) {
        case "FIELD_ON_CHANGE":
            return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_a = {}, _a[action.name] = action.value, _a)) });
        case "FIELD_START_VALIDATE":
            return __assign(__assign({}, state), { errors: __assign(__assign({}, state.errors), (_b = {}, _b[action.name] = null, _b)), validating: __assign(__assign({}, state.validating), (_c = {}, _c[action.name] = true, _c)) });
        case "FIELD_END_VALIDATE":
            return __assign(__assign({}, state), { errors: __assign(__assign({}, state.errors), (_d = {}, _d[action.name] = action.value, _d)), validating: __assign(__assign({}, state.validating), (_e = {}, _e[action.name] = undefined, _e)) });
        case "FORM_START_DISABLE":
            return __assign(__assign({}, state), { disabled: action.value });
        case "FORM_END_DISABLE":
            return __assign(__assign({}, state), { disabled: action.value });
        case "FORM_VALIDATE":
            return __assign(__assign({}, state), { validForm: action.value });
        case "FORM_RESET":
            return __assign(__assign({}, state), { data: {}, errors: {}, validating: {}, custom: {}, validForm: false, disabled: null });
        default:
            return state;
    }
}
exports.coreReducer = coreReducer;
function useForm() {
    var extraArgs = (0, react_1.useRef)({
        fields: [],
        fieldMap: {},
        onSubmit: function () { return undefined; }
    });
    var _a = useThunkReducer(coreReducer, {
        data: {},
        errors: {},
        validating: {},
        custom: {},
        validForm: false,
        disabled: null
    }, extraArgs.current), state = _a[0], dispatch = _a[1];
    return { state: state, dispatch: dispatch };
}
exports.useForm = useForm;
var isEmpty = function (arr) {
    return Array.isArray(arr) && (arr.length === 0 || arr.every(isEmpty));
};
var generateLayout = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var sections = _a.sections, fields = _a.fields;
    var customLayout = [];
    if (sections) {
        customLayout = JSON.parse(JSON.stringify(sections));
        customLayout.forEach(function (section, idx) {
            var nonEmptyRows = section.fields.map(function (row) {
                var nonEmptyCols = row.filter(function (col) { return !isEmpty(col); });
                if (nonEmptyCols.length > 0) {
                    return nonEmptyCols;
                }
            }).filter(function (row) { return row !== undefined; });
            customLayout[idx].fields = nonEmptyRows;
        });
    }
    if (fields) {
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            if (field.layout) {
                var section = customLayout.length;
                if (field.layout.section !== undefined && field.layout.section >= 0) {
                    section = field.layout.section;
                }
                var row = (_c = (_b = customLayout[section]) === null || _b === void 0 ? void 0 : _b.fields) === null || _c === void 0 ? void 0 : _c.length;
                if (field.layout.row !== undefined && field.layout.row >= 0) {
                    row = field.layout.row;
                }
                var col = (_e = (_d = customLayout[section]) === null || _d === void 0 ? void 0 : _d.fields[row]) === null || _e === void 0 ? void 0 : _e.length;
                if (field.layout.col !== undefined && field.layout.col >= 0) {
                    col = field.layout.col;
                }
                if (customLayout[section]) {
                    (_g = (_f = customLayout[section]) === null || _f === void 0 ? void 0 : _f.fields[row][col]) === null || _g === void 0 ? void 0 : _g.push(field.name);
                }
                else {
                    customLayout = __spreadArray(__spreadArray([], customLayout, true), [
                        {
                            fields: [[[field.name]]]
                        },
                    ], false);
                }
            }
            else if (!sections) {
                customLayout = __spreadArray(__spreadArray([], customLayout, true), [
                    {
                        fields: [[[field.name]]]
                    },
                ], false);
            }
        }
        return customLayout;
    }
};
exports.generateLayout = generateLayout;
function joinReducers() {
    var reducers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        reducers[_i] = arguments[_i];
    }
    return function (state, action) {
        var newState = state;
        for (var _i = 0, reducers_1 = reducers; _i < reducers_1.length; _i++) {
            var reducer = reducers_1[_i];
            newState = reducer(newState, action);
        }
        return newState;
    };
}
exports.joinReducers = joinReducers;
function useThunkReducer(reducer, initialState, extraArgs) {
    var lastState = (0, react_1.useRef)(initialState);
    var getState = (0, react_1.useCallback)(function () {
        var state = lastState.current;
        return state;
    }, []);
    var enhancedReducer = (0, react_1.useCallback)(function (state, action) {
        var newState = reducer(state, action);
        lastState.current = newState;
        return newState;
    }, [reducer]);
    var _a = (0, react_1.useReducer)(enhancedReducer, initialState), state = _a[0], dispatch = _a[1];
    var customDispatch = (0, react_1.useCallback)(function (action) {
        if (typeof action === "function") {
            return action(customDispatch, getState, extraArgs);
        }
        else {
            return dispatch(action);
        }
    }, [getState, extraArgs]);
    return [state, customDispatch];
}
exports.useThunkReducer = useThunkReducer;
