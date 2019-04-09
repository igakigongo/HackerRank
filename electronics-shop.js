  const getMoneySpent = (keyboards, drives, b) => {

  	const sortedKeyboardPrices = Array.from(new Set(keyboards))
  		.sort((a, b) => a - b);

  	const sortedDrivePrices = Array.from(new Set(drives))
  		.sort((a, b) => a - b);

  	let maxAmountToSpend = -1;
  	sortedDrivePrices.forEach(dp => {
  		sortedKeyboardPrices.forEach(kp => {
  			if ((dp + kp) <= b && (dp + kp) > maxAmountToSpend)
  				maxAmountToSpend = (dp + kp);
  		});
  	});

  	return maxAmountToSpend;
  }

  console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
  console.log(getMoneySpent([4], [5], 5));