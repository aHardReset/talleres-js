function average(numArray) {
  const sumElements = (aggregate = 0, next) => {
    return aggregate + next;
  };

  const total = numArray.reduce(sumElements);
  return total / numArray.length;
}

const lista1 = [...Array(10).keys()].map((x) => x * 100);

console.log(lista1);
