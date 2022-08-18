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
var api_1 = require("@react-google-maps/api");
var react_1 = require("react");
var lodash_1 = require("lodash");
// Components
var LocationSearchInput_1 = __importDefault(require("../LocationSearchInput"));
// Styles
var MapCoordinates_styled_1 = require("../MapCoordinates.styled");
var containerStyle = {
    display: "flex",
    height: "200px"
};
var mapOptions = {
    disableDefaultUI: true,
    zoomControl: true
};
var Map = function (props) {
    var address = props.address, handleCoordinates = props.handleCoordinates, _a = props.mapPosition, mapPosition = _a === void 0 ? { lat: -3.745, lng: -40.523 } : _a, onClick = props.onClick;
    return (React.createElement(MapCoordinates_styled_1.MapContainer, null,
        (0, lodash_1.isEmpty)(address) && React.createElement(LocationSearchInput_1["default"], { handleCoordinates: handleCoordinates }),
        React.createElement("div", null,
            React.createElement(api_1.GoogleMap, { mapContainerStyle: containerStyle, center: mapPosition, zoom: 10, onClick: onClick, options: mapOptions },
                React.createElement(api_1.Marker, { position: mapPosition })))));
};
exports["default"] = (0, react_1.memo)(Map);
