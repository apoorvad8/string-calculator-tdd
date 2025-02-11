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
		const negatives: number[] = [];

		for (const num of nums) {
			const n = parseInt(num, 10);
			if (n < 0) {
				negatives.push(n);
			}
			sum += n;
		}

		if (negatives.length > 0) {
			throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
		}

		return sum;
	}
}
