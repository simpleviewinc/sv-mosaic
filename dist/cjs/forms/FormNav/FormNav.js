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
var lodash_1 = require("lodash");
var FormNav_styled_1 = require("./FormNav.styled");
var ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
var ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
var FormNav = function (props) {
    var sections = props.sections, sectionsRefs = props.sectionsRefs;
    // State variables
    var _a = (0, react_1.useState)(0), navWidth = _a[0], setNavWidth = _a[1];
    var _b = (0, react_1.useState)(0), linksWidth = _b[0], setLinksWidth = _b[1];
    var _c = (0, react_1.useState)(0), selectedTab = _c[0], setSelectedTab = _c[1];
    var _d = (0, react_1.useState)(0), scrollX = _d[0], setscrollX = _d[1];
    var navRef = (0, react_1.useRef)(null);
    var linkRef = (0, react_1.useRef)([]);
    /**
     * Computes the total width of all the links elements so that it
     * can be compared with the width of the nav in order to know
     * whether to show the arrow that scrolls horizontally to the right.
     */
    (0, react_1.useEffect)(function () {
        var totalLinksWidth = 0;
        linkRef.current.forEach(function (current) {
            var linkWidth = current.getBoundingClientRect().width;
            // 40 corresponds to the extra right margin of each link.
            totalLinksWidth += linkWidth + 40;
        });
        setNavWidth(navRef.current.getBoundingClientRect().width);
        setLinksWidth(totalLinksWidth);
    }, []);
    /**
     * Defines if the left scroll
     * button should be shown.
     */
    var scrollCheck = function () {
        setscrollX(navRef.current.scrollLeft);
    };
    /**
     * Handles scrolling by incrementing or decrementing
     * the scrollLeft property.
     * @param direction : to scroll to;
     */
    var handleNav = function (direction) {
        if (direction === "left") {
            navRef ? (navRef.current.scrollLeft -= 200) : null;
        }
        else {
            navRef ? (navRef.current.scrollLeft += 200) : null;
        }
    };
    /**
     * Goes to the sections that is selected.
     * @param e
     * @param idx
     * @param sectionId
     */
    var handleClick = function (e, idx) {
        e.preventDefault();
        sectionsRefs[idx].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        setSelectedTab(idx);
    };
    (0, react_1.useEffect)(function () {
        var navHighlighter = function () {
            var scrollY = window.pageYOffset;
            if (sectionsRefs.length === 0) {
                return;
            }
            sectionsRefs === null || sectionsRefs === void 0 ? void 0 : sectionsRefs.forEach(function (current) {
                var currentSection = current;
                var sectionHeight = currentSection === null || currentSection === void 0 ? void 0 : currentSection.offsetHeight;
                var sectionTop = (currentSection === null || currentSection === void 0 ? void 0 : currentSection.offsetTop) - 350;
                var sectionId = currentSection === null || currentSection === void 0 ? void 0 : currentSection.getAttribute("id");
                if (scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight) {
                    setSelectedTab(Number(sectionId));
                }
            });
        };
        var navHighlighterDebounced = (0, lodash_1.debounce)(navHighlighter, 200);
        window.addEventListener("scroll", navHighlighterDebounced);
        return function () {
            window.removeEventListener("scroll", navHighlighterDebounced);
            navHighlighterDebounced.cancel();
        };
    }, [sectionsRefs]);
    return (React.createElement(FormNav_styled_1.FormNavWrapper, { className: "form-nav-wrapper" },
        React.createElement(FormNav_styled_1.FormNavRow, { scrollX: scrollX },
            scrollX !== 0 && (React.createElement(FormNav_styled_1.IconWrapper, null,
                React.createElement(ChevronLeft_1["default"], { onClick: function () { return handleNav("left"); } }))),
            React.createElement(FormNav_styled_1.NavItems, { ref: navRef, onScroll: scrollCheck }, sections.map(function (section, idx) { return (React.createElement(FormNav_styled_1.LinksWrapper, { className: "".concat(idx === selectedTab ? "highlight" : ""), key: "".concat(section.title, "-").concat(section.id), onClick: function (e) { return handleClick(e, idx); }, ref: function (el) { return linkRef.current[idx] = el; } },
                React.createElement("a", { href: "#".concat(section.title) }, section.title))); })),
            linksWidth > navWidth && (React.createElement(FormNav_styled_1.IconWrapper, null,
                React.createElement(ChevronRight_1["default"], { onClick: function () { return handleNav("right"); } }))))));
};
exports["default"] = (0, react_1.memo)(FormNav);
