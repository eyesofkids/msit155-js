// 1. 基本的函式宣告改寫
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
// 2. 單一行return的函式主體簡化
const bar2 = function (x, y) {
  return x + y
}

// 箭頭函式，當函式主體中只有一行而且是return時，可以進一步簡化
// 去掉大括號與return
const bar3 = (x, y) => x + y

// ---------------------------------------------
// 3. 單一行非return的函式主體簡化
// 箭頭函式，當函式主體中只有一行而且是沒return時，通常也可以簡化
const baz2 = function (x, y) {
  console.log(x, y)
}

// 實際上相當於 (x, y) => { return console.log(x, y) }
const baz3 = (x, y) => console.log(x, y)

// ---------------------------------------------
// 4. 單一個傳入參數時，可以省略圓括號
const qux2 = function (x) {
  console.log(x)
}

// 實際上相當於 (x) => { return console.log(x) }
// 略過prettier的格式化
// prettier-ignore
const qux3 = x => console.log(x)
