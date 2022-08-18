import { isArray } from "lodash";
export const filterAction = (action, args = {}) => {
    if (action.show === undefined) {
        return true;
    }
    const shows = isArray(action.show) ? action.show : [action.show];
    const isValid = shows.every(show => {
        if (typeof show === "boolean") {
            return show;
        }
        else if (typeof show === "function") {
            return show(args);
        }
        else {
            throw new Error(`Action ${action.name}.show must be boolean or a function`);
        }
    });
    return isValid;
};
