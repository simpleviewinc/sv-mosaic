import * as React from "react";
import { memo } from "react";
import Button from "../../components/Button";
const LoadMoreButton = (props) => {
    var _a, _b, _c, _d, _e;
    const { fieldDef } = props;
    return (((_b = (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.parentInputSettings) === null || _b === void 0 ? void 0 : _b.getOptions) ? (React.createElement(Button, { color: 'gray', variant: 'outlined', disabled: (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) || !((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.canLoadMore), onClick: (_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.getMoreOptions, label: ((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.canLoadMore)
            ? "Load more"
            : "Can't load more options" })) : null);
};
export default memo(LoadMoreButton);
