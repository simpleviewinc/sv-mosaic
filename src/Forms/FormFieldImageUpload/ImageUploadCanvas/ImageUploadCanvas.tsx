import * as React from 'react';
import { useRef, useEffect, ReactElement } from 'react';
import { StyledCanvas } from '../FormFieldImageUpload.styled';

const ImageUploadCanvas = (props): ReactElement => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		let animationFrameId
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
			context.strokeStyle = "black";//"rgb(255,255,255)";
			context.stroke();   
			context.closePath();

			animationFrameId = window.requestAnimationFrame(update)
		}
		update();

		function setMousePosition(e: MouseEvent) {
			mouseX = e.clientX - canvasPos.x;
			mouseY = e.clientY - canvasPos.y;
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

		canvasRef.current.addEventListener('mousemove', setMousePosition, false);

		return () => {
			console.log('CANVAS REMOVED')
			canvasRef.current.removeEventListener('mousemove', setMousePosition);
			window.cancelAnimationFrame(animationFrameId)
		}
    
	}, [])


	const setMouseCoordinates = (event) => {
		const x = event.clientX;
		const y = event.clientY;

		console.log("x coords: " + x + ", y coords: " + y);
	}

	return (
		<StyledCanvas
			width={261}
			height={172}
			ref={canvasRef}
			onClick={setMouseCoordinates}
			{...props}
		/>
	);
};

export default ImageUploadCanvas;
