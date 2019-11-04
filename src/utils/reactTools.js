const counters = {};

function countRenders(name) {
	counters[name] = counters[name] || 0;
	console.log("Render", name, ++counters[name]);
}

export {
	countRenders
}