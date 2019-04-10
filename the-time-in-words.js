const strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
	'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty',
	'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'
];

const timeInWords = (h, m) => {
	if (m === 0) {
		return `${strings[h-1]} o' clock`;
	}
	if (m === 30) {
		return `half past ${strings[h-1]}`;
	}
	let hour = h + (m > 30 ? 1 : 0);
	let minutes = m > 30 ? 60 - m : m;
	let time = `${strings[minutes-1]}`;
	time += minutes < 2 ? ' minute' : minutes === 15 ? '' : ' minutes';
	time += ` ${m > 30?'to':'past'}`;
	time += ` ${strings[hour-1]}`;
	return time;
};

console.log(timeInWords(5, 47));
console.log(timeInWords(3, 00));
console.log(timeInWords(7, 15));
console.log(timeInWords(7, 30));