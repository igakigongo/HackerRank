// Class to represent a node
/*function Node(val) {
	// value
	this.val = val;

	// children
	this.left = null;
	this.right = null;
}

Node.prototype.insert = function(left, right) {
	this.left = new Node(this.val + left);
	this.right = new Node(this.val + right);
};

const traverseAndInsert = function(root, depth, leftVal, rightVal) {
	if (root.left === null || root.right === null) {
		root.insert(leftVal, rightVal);
		if (depth === 1) return;
		depth--;
	}

	traverseAndInsert(root.left, depth, leftVal, rightVal);
	traverseAndInsert(root.right, depth, leftVal, rightVal);
};*/

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

console.log(stones(3, 1, 2));
console.log(stones(4, 10, 100));