// FD
function foo1(x, y) {
  console.log(x, y)
  return x + y
}

// FE
const foo2 = function (x, y) {
  console.log(x, y)
  return x + y
}

// Arrow Function
const foo3 = (x, y) => {
  console.log(x, y)
  return x + y
}

//
const bar2 = function (x, y) {
  return x + y
}

const bar3 = (x, y) => x + y

//
const baz2 = function (x, y) {
  console.log(x, y)
}

const baz3 = (x, y) => console.log(x, y)
