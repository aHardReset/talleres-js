const data = [1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 3];

function countElementsInArray(numArray) {
  const elementCounter = {};
  const counter = (element) => {
    elementCounter[element]
      ? (elementCounter[element] += 1)
      : (elementCounter[element] = 1);
  };

  numArray.map(counter);
  return elementCounter;
}

function getModeFromCounter(counterObject) {
  const elements = Object.entries(counterObject);
  const sortBySecondElementInInnerArray = (l, r) => {
    return l[1] - r[1];
  };
  const sortedElements = elements.sort(sortBySecondElementInInnerArray);
  return sortedElements[sortedElements.length - 1][0];
}

function modeFromArray(numArray) {
  const dataCounter = countElementsInArray(numArray);
  return getModeFromCounter(dataCounter);
}

function calculateMode(numArray) {
  if (numArray.length === 0) {
    return undefined;
  }
  if (numArray.length === 1) {
    return numArray[0];
  }
  let maxCount = 0;
  let mode = [];
  const counter = {};
  numArray.forEach((element) => {
    counter[element] ? (counter[element] += 1) : (counter[element] = 1);
    if (counter[element] > maxCount) {
      maxCount = counter[element];
      mode = [element];
    } else if (counter[element] === maxCount) {
      mode.push(element);
    }
  });

  if (mode.length === numArray.length) {
    return null;
  }
  const result = { mode };
  if (mode.length === 1) {
    result["type"] = "single";
  } else if (mode.length === 2) {
    result["type"] = "bimodal";
  } else {
    result["type"] = "multimodal";
  }
  return result;
}

function harmonicMean(numArray) {
  const n = numArray.length;
  if (n === 0) {
    return undefined;
  }
  let sum = 0;
  numArray.forEach((element) => (sum += 1 / element));
  return n / sum;
}
