/**
 * The non-recursive solution to the fibonacci sequence question!
 * @param {number} num : input number represents the fibonacci sequence length
 * @returns The array of elements of the fibonacii sequence
 */

const fibs = (num) => {
	if (num < 1 || typeof num !== 'number') return 'Please enter a number greater than or equal to 1';

	let fibArr = [0, 1];
	if (num === 1) return fibArr.slice(0, -1);
	if (num === 2) return fibArr;

	while (fibArr.length < num) {
		fibArr.push(Number(fibArr.slice(-2, -1)) + Number(fibArr.slice(-1)));
	}

	return fibArr;
};

console.log(fibs(-2)); // "Please enter a number greater than or equal to 1"
console.log(fibs(0)); // "Please enter a number greater than or equal to 1"
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(3)); // [0, 1, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
