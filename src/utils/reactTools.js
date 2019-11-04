import { useRef, useEffect } from "react";

const counters = {};

function countRenders(name) {
	counters[name] = counters[name] || 0;
	console.log("Render", name, ++counters[name]);
}

function useStateRef(state) {
	const ref = useRef();
	useEffect(() => {
		ref.current = state;
	});
	
	return ref;
}

export {
	countRenders,
	useStateRef
}