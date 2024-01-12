// FD
// 函式宣告語法，一般稱為函式宣告式
function foo1(x, y) {
  console.log(x, y)
  return x + y
}

// FE
// 函式表達式語法，一般稱為函式匿名式
const foo2 = function (x, y) {
  console.log(x, y)
  return x + y
}

// Arrow Function
// 箭頭函式可以從函式表達式語法簡化而來
// 因為花括號中的函式主體超過一行，所以不能省略
const foo3 = (x, y) => {
  console.log(x, y)
  return x + y
}

// ---------------------------------------------
const bar2 = function (x, y) {
  return x + y
}

// 箭頭函式，當函式主體中只有一行而且是return時，可以進一步簡化
// 去掉大括號與return
const bar3 = (x, y) => x + y

// ---------------------------------------------
// 箭頭函式，當函式主體中只有一行而且是沒return時，通常也可以簡化
const baz2 = function (x, y) {
  console.log(x, y)
}

// 實際上相當於 (x, y) => { return console.log(x, y) }
const baz3 = (x, y) => console.log(x, y)

// ---------------------------------------------
const qux2 = function (x) {
  console.log(x)
}

// 實際上相當於 (x) => { return console.log(x) }
// 只有一個參數時，可以省略圓括號
// prettier-ignore
const qux2 = x => console.log(x)
