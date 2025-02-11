export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }
    const nums = numbers.split(',');
    if (nums.length === 1) {
      return parseInt(numbers, 10);
    }
    return parseInt(nums[0], 10) + parseInt(nums[1], 10);
  }
}
