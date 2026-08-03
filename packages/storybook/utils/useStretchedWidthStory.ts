import { useEffect } from "react";

export function useStretchedWidthStory(enabled?: boolean) {
	useEffect(() => {
		// When displaying the button full width, we need to remove Storybook's default padding
		const styleTag = document.createElement("style");
		styleTag.innerHTML = ".sb-show-main.sb-main-centered #storybook-root { padding: 0; width: 100vw; }";

		const remove = () => {
			if (document.head.contains(styleTag)) {
				document.head.removeChild(styleTag);
			}
		};

		if (enabled) {
			document.head.appendChild(styleTag);
		} else {
			remove();
		}

		return () => {
			remove();
		};
	}, [enabled]);
}
