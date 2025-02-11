export class StringCalculator {
	add(numbers: string): number {
		if (!numbers) {
			return 0;
		}

		let delimiter = /[,\n]/;
		let numsStr = numbers;

		if (numbers.startsWith("//")) {
			const delimiterEnd = numbers.indexOf("\n");
			delimiter = new RegExp(numbers.substring(2, delimiterEnd));
			numsStr = numbers.substring(delimiterEnd + 1);
		}

		const nums = numsStr.split(delimiter);
		let sum = 0;
		for (const num of nums) {
			sum += parseInt(num, 10);
		}
		return sum;
	}
}
