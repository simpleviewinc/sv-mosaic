import * as React from "react";
import Button from "../Button";
import { BottomActionWrapper, ContentWrapper, CardWrapper, StyledHr, TitleWrapper, TitleBar, } from "./Card.styled";
const Card = (props) => {
    const { bottomAction, content, title, titleIcon, topAction, } = props;
    return (React.createElement(CardWrapper, null,
        React.createElement(TitleBar, null,
            React.createElement(TitleWrapper, null,
                titleIcon,
                title),
            topAction && React.createElement(Button, { ...topAction })),
        React.createElement(ContentWrapper, null, content.map((element, idx) => (React.createElement("div", { key: `card-content-${idx}` },
            element,
            idx !== content.length - 1 && React.createElement(StyledHr, null))))),
        bottomAction && (React.createElement(BottomActionWrapper, null,
            React.createElement(Button, { ...bottomAction })))));
};
export default Card;
