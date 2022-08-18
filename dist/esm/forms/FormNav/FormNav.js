import * as React from "react";
import { useState, useRef, useEffect, memo } from "react";
import { debounce } from "lodash";
import { FormNavWrapper, FormNavRow, IconWrapper, LinksWrapper, NavItems, } from "./FormNav.styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const FormNav = (props) => {
    const { sections, sectionsRefs } = props;
    // State variables
    const [navWidth, setNavWidth] = useState(0);
    const [linksWidth, setLinksWidth] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const [scrollX, setscrollX] = useState(0);
    const navRef = useRef(null);
    const linkRef = useRef([]);
    /**
     * Computes the total width of all the links elements so that it
     * can be compared with the width of the nav in order to know
     * whether to show the arrow that scrolls horizontally to the right.
     */
    useEffect(() => {
        let totalLinksWidth = 0;
        linkRef.current.forEach(current => {
            const linkWidth = current.getBoundingClientRect().width;
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
    const scrollCheck = () => {
        setscrollX(navRef.current.scrollLeft);
    };
    /**
     * Handles scrolling by incrementing or decrementing
     * the scrollLeft property.
     * @param direction : to scroll to;
     */
    const handleNav = (direction) => {
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
    const handleClick = (e, idx) => {
        e.preventDefault();
        sectionsRefs[idx].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        setSelectedTab(idx);
    };
    useEffect(() => {
        const navHighlighter = () => {
            const scrollY = window.pageYOffset;
            if (sectionsRefs.length === 0) {
                return;
            }
            sectionsRefs === null || sectionsRefs === void 0 ? void 0 : sectionsRefs.forEach(current => {
                const currentSection = current;
                const sectionHeight = currentSection === null || currentSection === void 0 ? void 0 : currentSection.offsetHeight;
                const sectionTop = (currentSection === null || currentSection === void 0 ? void 0 : currentSection.offsetTop) - 350;
                const sectionId = currentSection === null || currentSection === void 0 ? void 0 : currentSection.getAttribute("id");
                if (scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight) {
                    setSelectedTab(Number(sectionId));
                }
            });
        };
        const navHighlighterDebounced = debounce(navHighlighter, 200);
        window.addEventListener("scroll", navHighlighterDebounced);
        return () => {
            window.removeEventListener("scroll", navHighlighterDebounced);
            navHighlighterDebounced.cancel();
        };
    }, [sectionsRefs]);
    return (React.createElement(FormNavWrapper, { className: "form-nav-wrapper" },
        React.createElement(FormNavRow, { scrollX: scrollX },
            scrollX !== 0 && (React.createElement(IconWrapper, null,
                React.createElement(ChevronLeftIcon, { onClick: () => handleNav("left") }))),
            React.createElement(NavItems, { ref: navRef, onScroll: scrollCheck }, sections.map((section, idx) => (React.createElement(LinksWrapper, { className: `${idx === selectedTab ? "highlight" : ""}`, key: `${section.title}-${section.id}`, onClick: (e) => handleClick(e, idx), ref: el => linkRef.current[idx] = el },
                React.createElement("a", { href: `#${section.title}` }, section.title))))),
            linksWidth > navWidth && (React.createElement(IconWrapper, null,
                React.createElement(ChevronRightIcon, { onClick: () => handleNav("right") }))))));
};
export default memo(FormNav);
