
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix)) {
    return matrix.map((arr, index) => {
      if (index % 2 !== 0) {
        return arr.reverse();
      }
      return arr;
    })
      .flat();
  } else {
    return [];
  }
}
