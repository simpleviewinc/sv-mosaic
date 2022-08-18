"use strict";
exports.__esModule = true;
exports.useStoryBookCssReset = exports.useStateRef = exports.countRenders = void 0;
var react_1 = require("react");
var counters = {};
function countRenders(name) {
    counters[name] = counters[name] || 0;
    console.log("Render", name, ++counters[name]);
}
exports.countRenders = countRenders;
function useStateRef(state) {
    var ref = (0, react_1.useRef)(state);
    (0, react_1.useEffect)(function () {
        ref.current = state;
    });
    return ref;
}
exports.useStateRef = useStateRef;
function useStoryBookCssReset() {
    // in order to support fullscreen app-like CSS we need to add some CSS to the root elements
    (0, react_1.useEffect)(function () {
        document.body.parentElement.classList.add("resetHtml");
        return function () {
            document.body.parentElement.classList.remove("resetHtml");
        };
    }, []);
}
exports.useStoryBookCssReset = useStoryBookCssReset;
