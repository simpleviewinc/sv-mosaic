"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
// Styles
var FormFieldImageUpload_styled_1 = require("../FormFieldImageUpload.styled");
var ImageUploadCanvas = function (props) {
    var mousePosition = props.mousePosition;
    // State variables
    var _a = (0, react_1.useState)(true), isFocus = _a[0], setIsFocus = _a[1];
    var canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var canvas = canvasRef.current;
        var context = canvas.getContext("2d");
        var animationFrameId;
        var canvasPos = getPosition(canvas);
        var mouseX = 0;
        var mouseY = 0;
        var update = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(0, mouseY);
            context.lineTo(261, mouseY);
            context.moveTo(mouseX, 0);
            context.lineTo(mouseX, 261);
            context.strokeStyle = "white";
            context.stroke();
            context.closePath();
            animationFrameId = window.requestAnimationFrame(update);
        };
        if (isFocus) {
            update();
        }
        function setMousePosition(e) {
            mouseX = e.pageX - canvasPos.x;
            mouseY = e.pageY - canvasPos.y;
        }
        function getPosition(canvas) {
            var xPosition = 0;
            var yPosition = 0;
            while (canvas) {
                xPosition += (canvas.offsetLeft - canvas.scrollLeft + canvas.clientLeft);
                yPosition += (canvas.offsetTop - canvas.scrollTop + canvas.clientTop);
                canvas = canvas.offsetParent;
            }
            return {
                x: xPosition,
                y: yPosition
            };
        }
        canvasRef.current.addEventListener("mousemove", setMousePosition, false);
        return function () {
            if (canvasRef.current) {
                canvasRef.current.removeEventListener("mousemove", setMousePosition);
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isFocus]);
    var setMouseCoordinates = function (event) {
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX - rect.left; //x position within the element.
        var y = event.clientY - rect.top; //y position within the element.
        mousePosition({ x: x, y: y });
        setIsFocus(!isFocus);
    };
    return (React.createElement(FormFieldImageUpload_styled_1.CanvasContainer, { onClick: setMouseCoordinates },
        React.createElement(FormFieldImageUpload_styled_1.StyledCanvas, __assign({ "data-testid": 'canvas-el-test', width: 261, height: 172, ref: canvasRef }, props))));
};
exports["default"] = ImageUploadCanvas;
