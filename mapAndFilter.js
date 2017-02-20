function filter(arr, filterFunction) {
	return arr.reduce((acc, item) => {
		return filterFunction(item) ? [...acc, item] : acc;
	}, []);
}

function map(arr, mapFn) {
	return arr.reduce((acc, item) => {
		return [...acc, mapFn(item)];
	}, []);
}