// HOF: 函式可以回傳另個函式
function sum1(a, b) {
  return a + b
}

console.log(sum1(1, 2))

function sum2(a) {
  return function (b) {
    return a + b
  }
}

const foo = sum2(1)
console.log(foo)
console.log(foo(2))
// 柯里化
console.log(sum2(1)(2))

// 改寫為箭頭函式
const sum3 = (a) => (b) => a + b
//----------------------------
// HOF: 函式作為另個函式的傳入參數值
const log = (a) => console.log(a)

const sum = (a, b, fn) => {
  fn(a + b) // log(a+b) -> log(1+2) -> log(3)
  return a + b
}

console.log(sum(1, 2, log))

// return 回傳範例
// 群組運算子
// ASI (Automatic Semicolon Insertion)
// prettier-ignore
function add1() {
  var a = 1, b = 2
  
  return ( 
    a 
    + 
    b
  )
}
