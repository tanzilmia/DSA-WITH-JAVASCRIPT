let array = [0, 1, 2, 2, 2, 3, 4, 5, 5];

const removeElement = (arr, val) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
};
const result = removeElement(array, 5);
console.log(result, "number of unique element");
