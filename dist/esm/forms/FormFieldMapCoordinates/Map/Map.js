import * as React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { memo } from "react";
import { isEmpty } from "lodash";
// Components
import LocationSearchInput from "../LocationSearchInput";
// Styles
import { MapContainer } from "../MapCoordinates.styled";
const containerStyle = {
    display: "flex",
    height: "200px",
};
const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
};
const Map = (props) => {
    const { address, handleCoordinates, mapPosition = { lat: -3.745, lng: -40.523 }, onClick } = props;
    return (React.createElement(MapContainer, null,
        isEmpty(address) && React.createElement(LocationSearchInput, { handleCoordinates: handleCoordinates }),
        React.createElement("div", null,
            React.createElement(GoogleMap, { mapContainerStyle: containerStyle, center: mapPosition, zoom: 10, onClick: onClick, options: mapOptions },
                React.createElement(Marker, { position: mapPosition })))));
};
export default memo(Map);
