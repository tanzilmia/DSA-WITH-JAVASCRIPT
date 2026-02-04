// hello dsa

// find 2nd largest number in an array
const array = [1, 20, 24, 25, 36, 8, 7, 15];
const findSecondLargestNumber = (arr) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return {
    firstLargest,
    secondLargest,
  };
};

const result = findSecondLargestNumber(array);
console.log(result);
