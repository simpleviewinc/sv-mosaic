export function getOuterHeight(el: HTMLElement) {
	const styles = window.getComputedStyle(el);
	const margin = parseInt(styles["marginTop"]) + parseFloat(styles["marginBottom"]);

	return Math.ceil(el.offsetHeight + margin);
}
