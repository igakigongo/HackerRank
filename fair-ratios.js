const fairRations = (B) => {
	let count = 0;
	for (let i = 0; i < B.length - 1; i++) {
		if (B[i] & 1) {
			B[i]++;
			B[i + 1]++;
			count += 2;
		}
	}

	return (B[B.length - 1] & 1) ? 'NO' : count;
};

console.log(fairRations([4, 5, 6, 7]));
console.log(fairRations([2, 3, 4, 5, 6]));
console.log(fairRations([1, 2]));
console.log(fairRations([6, 7]));
console.log(fairRations([2, 2]));
console.log(fairRations([3, 3]));