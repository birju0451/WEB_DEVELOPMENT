// 7. Closure Counter Example
function outerFunction() {
  let count = 0; // private variable
  return function () {
    count++;
    return count;
  };
}
let counter = outerFunction();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

