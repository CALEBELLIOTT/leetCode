

// Insertion Sort

function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while ((j > -1) && (current < inputArr[j])) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}

// console.log(insertionSort([2, 5, 1, 2, 2, 54, 6543, 53, 32, 4, 3, 145]))

var sumEvenAfterQueries = function (nums, queries) {
  let answer = []
  queries.forEach(q => {
    let position = q[1]
    let value = q[0]
    let newNum = nums[position] + value
    console.log(newNum);
    nums.splice(position, 1, newNum)
    let sum = 0
    nums.forEach(n => {
      if (n % 2 == 0) {
        sum += n
      }
    })
    answer.push(sum)
  })
  return answer
};

console.log(sumEvenAfterQueries([1, 2, 3, 4],
  [[1, 0], [-3, 1], [-4, 0], [2, 3]]))