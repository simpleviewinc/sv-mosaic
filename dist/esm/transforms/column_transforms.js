import { get, map } from "lodash";
import { format } from "date-fns";
import { createElement } from "react";
import Image from "../components/Image";
export function transform_boolean() {
    return function ({ data }) {
        if (data === true) {
            return "Yes";
        }
        else {
            return "No";
        }
    };
}
export function transform_dateFormat() {
    return function ({ data }) {
        return format(data, "M/d/yyyy");
    };
}
export function transform_get(path) {
    return function ({ data }) {
        return get(data, path);
    };
}
export function transform_mapGet(path) {
    return ({ data }) => {
        const results = map(data, (obj) => {
            return get(obj, path);
        });
        // filters out undefined, null values
        return results.filter(val => val);
    };
}
export function transform_join() {
    return ({ data }) => {
        return data.join(", ");
    };
}
export function transform_thumbnail({ width, height }) {
    return function ({ data }) {
        const newUrl = data.replace(/\/upload\//, `/upload/c_fill,h_${height},w_${width}/`);
        const element = createElement(Image, {
            src: newUrl,
            className: "transform_thumbnail"
        }, null);
        return element;
    };
}
