/**
 * The recursive solution to the fibonacci sequence question!
 * @param {number} num : input number represents the fibonacci sequence length
 * @returns The array of elements of the fibonacii sequence
 */

const fibsRec = (num) =>
	num < 1 || typeof num !== 'number'
		? 'Please enter a number greater than or equal to 1'
		: num === 1
		? [0]
		: num === 2
		? [0, 1]
		: fibsRec(num - 1).concat(
				Number(fibsRec(num - 1).slice(-2, -1)) + Number(fibsRec(num - 1).slice(-1))
		  );

console.log(fibsRec(-2)); // "Please enter a number greater than or equal to 1"
console.log(fibsRec(0)); // "Please enter a number greater than or equal to 1"
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(3)); // [0, 1, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
