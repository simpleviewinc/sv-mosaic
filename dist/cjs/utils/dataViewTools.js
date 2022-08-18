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
exports.__esModule = true;
exports.transformRows = exports.transformColumn = void 0;
function transformColumn(row, column) {
    var data = row[column.column || column.name];
    if (data !== undefined && column.transforms !== undefined) {
        for (var _i = 0, _a = column.transforms; _i < _a.length; _i++) {
            var transform = _a[_i];
            if (data !== undefined) {
                data = transform({ data: data, row: row });
            }
        }
    }
    return data;
}
exports.transformColumn = transformColumn;
function transformRows(rows, columns) {
    var newRows = rows.map(function (row) {
        var newRow = __assign({}, row);
        columns.forEach(function (column) {
            newRow[column.name] = transformColumn(row, column);
        });
        return newRow;
    });
    return newRows;
}
exports.transformRows = transformRows;
