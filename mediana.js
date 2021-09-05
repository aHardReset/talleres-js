const data = [...Array(11).keys()].map((x) => x * 1 + 1);
data.sort();

const arrayIsEven = (array) => {
  const result = array.length % 2 === 0;
  return result;
};

const sortArray = (array) => {
  const sortByNumber = (l, r) => {
    return l - r;
  };
  const sortedArray = array.sort(sortByNumber);
  return sortedArray;
};

// test the sortArray with a lot of arrays
const testSortArray = () => {
  const testArray = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 10, 10, 2, 3, 34, 35, 33],
  ];
  testArray.forEach((array) => {
    const sortedArray = sortArray(array);
    console.log(`${array} sorted: ${sortedArray}`);
  });
};

const calculateMedian = (numArray) => {
  let median;
  if (arrayIsEven(numArray)) {
    const firstValue = numArray[numArray.length / 2 - 1];
    const secondValue = numArray[numArray.length / 2];
    const average = (firstValue + secondValue) / 2;
    median = average;
  } else {
    median = numArray[(numArray.length + 1) / 2 - 1];
  }
  return median;
};
