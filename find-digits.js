	// version 1
	const findDigits = (n) => Array.from(n.toString())
		.reduce((a, c) => a += n % (+c) == 0 ? 1 : 0, 0);

	// version 2
	const findDigits2 = (n) => {
		let counter = 0;
		let number = n;

		while (number) {
			const digit = number % 10;
			counter += n % digit === 0 ? 1 : 0;
			number = (digit === 0 ? number : number - digit) / 10;
		}
		return counter;
	}

	console.log(findDigits(12));
	console.log(findDigits(1012));
	console.log(findDigits2(12));
	console.log(findDigits2(1012));