import { useRef, useEffect } from "react";

const counters = {};

function countRenders(name) {
	counters[name] = counters[name] || 0;
	console.log("Render", name, ++counters[name]);
}

function useStateRef<T>(state: T) {
	const ref = useRef<T>(state);
	useEffect(() => {
		ref.current = state;
	});

	return ref;
}

function useStoryBookCssReset() {
	// in order to support fullscreen app-like CSS we need to add some CSS to the root elements
	useEffect(() => {
		document.body.parentElement.classList.add("resetHtml");

		return () => {
			document.body.parentElement.classList.remove("resetHtml");
		};
	}, []);
}

export {
	countRenders,
	useStateRef,
	useStoryBookCssReset,
};
