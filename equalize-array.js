const equalizeArray = (arr) => {
 	const { length } = arr;

 	const frequencies = arr.reduce((a, c) => {
 		if (a.hasOwnProperty(c)) a[c] += 1;
 		else a[c] = 1;
 		return a;
 	}, {});

 	console.log(frequencies);

 	return Object.keys(frequencies)
 		.reduce((a, c) => (length - frequencies[c] < a ? length - frequencies[c] : a),
 			Number.MAX_SAFE_INTEGER);
};

console.log(equalizeArray([3, 3, 2, 1, 3]));
