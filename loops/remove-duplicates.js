let array = [0, 1, 1, 2, 2, 3, 4, 5, 5, 6];
const removeDuplicates = (nums) => {
  let x = 0; // x means the pointer of the array num
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};

const result = removeDuplicates(array);
console.log(result, "number of unique element");
