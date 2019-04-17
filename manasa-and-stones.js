const stones = (n, a, b) => {
	let depth = 1;
	let final = new Set([a, b]);
	while (depth < n - 1) {
		let inSet = new Set();
		final.forEach(ele => {
			inSet.add(ele + a);
			inSet.add(ele + b);
		});
		final.clear();
		final = new Set([...inSet]);
		depth++;
	}
	return [...final].sort((x, y) => x - y);
};

const stones2 = (n, a, b) => {
	const start = Math.min(a, b) * (n - 1);

	if (a === b) return [start];

	const diff = Math.abs(b - a);
	const array = [];
	for (let i = 0; i < n; i++) {
		array.push(start + (diff * i));
	}
	return array;
};

console.log(stones2(3, 2, 2));
console.log(stones2(4, 10, 100));
console.log(stones2(5, 10, 100));
console.log(stones2(10, 10, 100));