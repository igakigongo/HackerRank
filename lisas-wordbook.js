const workbook = (n, k, arr) => {
	let pages = 0;
	let startpage = 1;
	let endpage = 0;

	return arr.reduce((a, c, i) => {
		pages = c % k === 0 ? c / k : parseInt(c / k) + 1;
		endpage = startpage + pages - 1;
		// console.log(`chapter ${i + 1} with ${pages} pages has ${c} problems, start: ${startpage} -> end ${endpage}`);

		let problem = 0;
		let specials = 0;
		for (let start = startpage, end = endpage; start <= endpage; start++) {
			for (let i = 0; i < k; i++) {
				problem++;
				if (problem === start) specials++;
				if (problem >= c) break;
			}
		}

		startpage = endpage + 1;
		return a + specials;
	}, 0);
};

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));