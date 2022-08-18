import * as React from "react";
import { useRef, useEffect, useState } from "react";
// Styles
import { CanvasContainer, StyledCanvas } from "../FormFieldImageUpload.styled";
const ImageUploadCanvas = (props) => {
    const { mousePosition } = props;
    // State variables
    const [isFocus, setIsFocus] = useState(true);
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let animationFrameId;
        const canvasPos = getPosition(canvas);
        let mouseX = 0;
        let mouseY = 0;
        const update = () => {
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
            let xPosition = 0;
            let yPosition = 0;
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
        return () => {
            if (canvasRef.current) {
                canvasRef.current.removeEventListener("mousemove", setMousePosition);
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isFocus]);
    const setMouseCoordinates = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left; //x position within the element.
        const y = event.clientY - rect.top; //y position within the element.
        mousePosition({ x, y });
        setIsFocus(!isFocus);
    };
    return (React.createElement(CanvasContainer, { onClick: setMouseCoordinates },
        React.createElement(StyledCanvas, { "data-testid": 'canvas-el-test', width: 261, height: 172, ref: canvasRef, ...props })));
};
export default ImageUploadCanvas;
