export function getInnerHeight(el: HTMLElement) {
	const styles = window.getComputedStyle(el);
	const border = parseInt(styles["borderTopWidth"]) + parseFloat(styles["borderBottomWidth"]);

	return Math.ceil(el.offsetHeight - border);
}
