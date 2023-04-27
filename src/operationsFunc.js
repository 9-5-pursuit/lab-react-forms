export const operations = {
  // Calculate the sum of numbers
  sum: function (numbers) {
    const numberArray = numbers.split(",");
    const sum = numberArray.reduce(
      (total, current) => total + Number(current),
      0
    );
    return sum;
  },

  // Calculate the average of numbers
  average: function (numbers) {
    // Use the sum function to calculate the sum of numbers
    return this.sum(numbers) / numbers.split(",").length;
  },

  // Find the mode (most frequently occurring number) in numbers
  mode: function (numbers) {
    const numberArray = numbers.split(",");
    let mode = 0;
    let maxOccurrence = 0;

    // Create a count map to track the occurrences of each number
    const countMap = numberArray.reduce((map, num) => {
      map[num] = (map[num] || 0) + 1;
      return map;
    }, {});

    // Find the number with the highest occurrence in the count map
    for (const num in countMap) {
      if (countMap[num] > maxOccurrence) {
        mode = num;
        maxOccurrence = countMap[num];
      }
    }
    return mode;
  },
};
