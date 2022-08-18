"use strict";
exports.__esModule = true;
exports.address = exports.defaultMapPosition = exports.getAddressStringFromAddressObject = exports.libraries = exports.mapOptions = void 0;
/**
 * Options to disable interactive actions. For more details take a look at the options interface:
 * https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.clickableIcons
 */
exports.mapOptions = {
    clickableIcons: false,
    disableDefaultUI: true,
    gestureHandling: "none",
    keyboardShortcuts: false,
    zoomControl: false
};
exports.libraries = ["places"];
/**
 *	Helper function to get a string address from an Address object
 */
var getAddressStringFromAddressObject = function (addressObj) {
    var address1 = addressObj.address1, city = addressObj.city, country = addressObj.country, postalCode = addressObj.postalCode, state = addressObj.state;
    return "".concat(address1, " ").concat(postalCode, " ").concat(city, " ").concat(state, " ").concat(country);
};
exports.getAddressStringFromAddressObject = getAddressStringFromAddressObject;
/**
 * Default map position
 */
exports.defaultMapPosition = { lat: -3.745, lng: -40.523 };
/**
 * Example of an address object.
 */
exports.address = {
    address1: "8950 N Oracle Rd",
    city: "Oro Valley",
    country: "United States",
    postalCode: 85704,
    state: "AZ",
    types: ["physical"]
};
