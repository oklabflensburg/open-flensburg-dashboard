export const calculateSum = (numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };
  
  export const calculateAverage = (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    const sum = calculateSum(numbers);
    return sum / numbers.length;
  };

  