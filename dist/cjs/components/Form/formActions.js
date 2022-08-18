"use strict";
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
exports.__esModule = true;
exports.formActions = void 0;
var validators_1 = require("./validators");
function runValidators(validators, value, data) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, validators_2, validator, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, validators_2 = validators;
                    _a.label = 1;
                case 1:
                    if (!(_i < validators_2.length)) return [3 /*break*/, 4];
                    validator = validators_2[_i];
                    return [4 /*yield*/, validator.fn(value, data, validator.options)];
                case 2:
                    result = _a.sent();
                    if (result) {
                        return [2 /*return*/, {
                                errorMessage: result,
                                validator: validator
                            }];
                    }
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.formActions = {
    init: function (_a) {
        var fields = _a.fields;
        return function (_dispatch, _getState, extraArgs) {
            return __awaiter(this, void 0, void 0, function () {
                var fieldMap;
                return __generator(this, function (_a) {
                    extraArgs.fields = fields;
                    fieldMap = fields.reduce(function (prev, curr) {
                        prev[curr.name] = curr;
                        return prev;
                    }, {});
                    extraArgs.fieldMap = fieldMap;
                    return [2 /*return*/];
                });
            });
        };
    },
    setFieldValue: function (_a) {
        var name = _a.name, value = _a.value, _b = _a.validate, validate = _b === void 0 ? false : _b;
        return function (dispatch) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, dispatch({
                                type: "FIELD_ON_CHANGE",
                                name: name,
                                value: value
                            })];
                        case 1:
                            _a.sent();
                            if (validate) {
                                dispatch(exports.formActions.validateField({ name: name }));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
    },
    validateField: function (_a) {
        var name = _a.name;
        return function (dispatch, getState, extraArgs) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var requiredFlag, validators, validatorsMap, data, startValue, result, currentValue;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            requiredFlag = (_a = extraArgs === null || extraArgs === void 0 ? void 0 : extraArgs.fieldMap[name]) === null || _a === void 0 ? void 0 : _a.required;
                            validators = ((_b = extraArgs === null || extraArgs === void 0 ? void 0 : extraArgs.fieldMap[name]) === null || _b === void 0 ? void 0 : _b.validators) ? (_c = extraArgs === null || extraArgs === void 0 ? void 0 : extraArgs.fieldMap[name]) === null || _c === void 0 ? void 0 : _c.validators : [];
                            if ((!validators || validators.length === 0) && !requiredFlag) {
                                return [2 /*return*/];
                            }
                            if ((!validators || validators.length === 0) && requiredFlag) {
                                validators.unshift(validators_1.required);
                            }
                            if ((validators || validators.length !== 0) && requiredFlag) {
                                validators.unshift(validators_1.required);
                            }
                            validatorsMap = (0, validators_1.mapsValidators)(validators);
                            return [4 /*yield*/, dispatch({
                                    type: "FIELD_START_VALIDATE",
                                    name: name
                                })];
                        case 1:
                            _d.sent();
                            data = getState().data;
                            startValue = getState().data[name];
                            return [4 /*yield*/, runValidators(validatorsMap, startValue, data)];
                        case 2:
                            result = _d.sent();
                            currentValue = getState().data[name];
                            if (!(startValue === currentValue)) return [3 /*break*/, 4];
                            return [4 /*yield*/, dispatch({
                                    type: "FIELD_END_VALIDATE",
                                    name: name,
                                    value: (result === null || result === void 0 ? void 0 : result.errorMessage) ? result === null || result === void 0 ? void 0 : result.errorMessage : undefined
                                })];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
    },
    copyFieldToField: function (_a) {
        var from = _a.from, to = _a.to;
        return function (dispatch, getState) {
            return __awaiter(this, void 0, void 0, function () {
                var fromValue;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fromValue = getState().data[from];
                            return [4 /*yield*/, dispatch(exports.formActions.setFieldValue({
                                    name: to,
                                    value: fromValue
                                }))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
    },
    validateForm: function (_a) {
        var fields = _a.fields;
        return function (dispatch, getState) {
            return __awaiter(this, void 0, void 0, function () {
                var touchedFields, i, currFieldName, _a, validForm, errors;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, dispatch({
                                type: "FORM_START_DISABLE",
                                value: true
                            })];
                        case 1:
                            _b.sent();
                            touchedFields = getState().data;
                            i = 0;
                            _b.label = 2;
                        case 2:
                            if (!(i < fields.length)) return [3 /*break*/, 6];
                            currFieldName = fields[i].name;
                            _a = (!!touchedFields[currFieldName] === false ||
                                Array.isArray(touchedFields[currFieldName]) || typeof touchedFields[currFieldName] === "object");
                            if (!_a) return [3 /*break*/, 4];
                            return [4 /*yield*/, dispatch(exports.formActions.validateField({ name: currFieldName }))];
                        case 3:
                            _a = (_b.sent());
                            _b.label = 4;
                        case 4:
                            _a;
                            _b.label = 5;
                        case 5:
                            i++;
                            return [3 /*break*/, 2];
                        case 6:
                            validForm = true;
                            errors = getState().errors;
                            Object.entries(errors).forEach(function (_a) {
                                var key = _a[0], value = _a[1];
                                if (value !== undefined)
                                    validForm = false;
                            });
                            return [4 /*yield*/, dispatch({
                                    type: "FORM_VALIDATE",
                                    value: validForm
                                })];
                        case 7:
                            _b.sent();
                            return [4 /*yield*/, dispatch({
                                    type: "FORM_END_DISABLE",
                                    value: false
                                })];
                        case 8:
                            _b.sent();
                            return [2 /*return*/, validForm];
                    }
                });
            });
        };
    },
    submitForm: function () {
        return function (dispatch, getState, extraArgs) {
            return __awaiter(this, void 0, void 0, function () {
                var valid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (getState().disabled)
                                return [2 /*return*/];
                            return [4 /*yield*/, dispatch(exports.formActions.validateForm({ fields: extraArgs.fields }))];
                        case 1:
                            valid = _a.sent();
                            return [2 /*return*/, {
                                    valid: valid,
                                    data: getState().data
                                }];
                    }
                });
            });
        };
    },
    resetForm: function () {
        return function (dispatch) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, dispatch({
                                type: "FORM_RESET"
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
    },
    setFormValues: function (_a) {
        var values = _a.values;
        return function (dispatch) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, _b, key, value;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, dispatch({
                                type: "FORM_START_DISABLE",
                                value: true
                            })];
                        case 1:
                            _c.sent();
                            _i = 0, _a = Object.entries(values);
                            _c.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            _b = _a[_i], key = _b[0], value = _b[1];
                            return [4 /*yield*/, dispatch(exports.formActions.setFieldValue({
                                    name: key,
                                    value: value
                                }))];
                        case 3:
                            _c.sent();
                            _c.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [4 /*yield*/, dispatch({
                                type: "FORM_END_DISABLE",
                                value: false
                            })];
                        case 6:
                            _c.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
    }
};
exports["default"] = exports.formActions;
