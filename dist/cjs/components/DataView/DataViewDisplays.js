"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DataViewDisplayGrid = exports.DataViewDisplayList = void 0;
var GridOn_1 = __importDefault(require("@mui/icons-material/GridOn"));
var FormatListBulleted_1 = __importDefault(require("@mui/icons-material/FormatListBulleted"));
var DataViewDisplayList_1 = __importDefault(require("./DataViewDisplayList"));
var DataViewDisplayGrid_1 = __importDefault(require("./DataViewDisplayGrid"));
exports.DataViewDisplayList = {
    name: "list",
    label: "List",
    component: DataViewDisplayList_1["default"],
    mIcon: FormatListBulleted_1["default"]
};
exports.DataViewDisplayGrid = {
    name: "grid",
    label: "Grid",
    component: DataViewDisplayGrid_1["default"],
    mIcon: GridOn_1["default"]
};
