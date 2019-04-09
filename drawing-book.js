	const pageCount = (n, p) => (n - p) > (p - 1) ?
		parseInt(p / 2) - parseInt(1 / 2) :
		parseInt(n / 2) - parseInt(p / 2);

	console.log(pageCount(6, 2));
	console.log(pageCount(5, 4));