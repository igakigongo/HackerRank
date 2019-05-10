const happyLadybugs = (b) => {
	let array = [...b];

	// all are dashes
	if (array.includes('_')) {
		if (array.every(x => x === '_')) return 'YES';

		// move and test them
		array = array
			.filter(x => x !== '_')
			.sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0));
	}

	// console.log(array);

	let position = 0;
	let happy = true;

	// test if all are happy
	let count = 0;
	while (position < array.length) {
		for (let i = position;; i++) {
			if (array[i] === array[position]) count++;
			else {
				position = i;
				break;
			}
		}
		happy = happy & count >= 2;
		count = 0;
	}
	return happy ? 'YES' : 'NO';
};

console.log(happyLadybugs('_'));
console.log(happyLadybugs('__'));
console.log(happyLadybugs('AABBC'));
console.log(happyLadybugs('AABBC_C'));
console.log(happyLadybugs('DD__FQ_QQF'));
console.log(happyLadybugs('X_Y__X'));
console.log(happyLadybugs('AABCBC'));