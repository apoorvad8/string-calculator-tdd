export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    const nums = numbers.split(/[,\n]/);
		let sum = 0;
		for (const num of nums) {
			sum += parseInt(num, 10);
		}
		return sum;
  }
}