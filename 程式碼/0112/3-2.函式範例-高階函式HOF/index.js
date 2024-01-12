//---------------------------------------------
// HOF: 函式可以回傳另個函式
// 原本的一般函式語法
function sum1(a, b) {
  return a + b
}

console.log(sum1(1, 2))

// 會回傳另個函式的函式
function sum2(a) {
  return function (b) {
    return a + b
  }
}

// 建立一個新的函式，其中a已經被固定為1(閉包)
const foo = sum2(1)
console.log(foo)
// 呼叫新函式，傳入參數值2
console.log(foo(2))
// 柯里化(Currying)語法，一樣會由左至右依序執行
console.log(sum2(1)(2))

// 改寫為箭頭函式
const sum3 = (a) => (b) => a + b

//---------------------------------------------
// HOF: 函式作為另個函式的傳入參數值
const log = (a) => console.log(a)

const sum = (a, b, fn) => {
  fn(a + b) // log(a+b) -> log(1+2) -> log(3)
  return a + b
}

console.log(sum(1, 2, log))

//---------------------------------------------
// return 回傳範例
// `()`是群組運算子
// ASI (Automatic Semicolon Insertion)

// 因為 ASI 的關係，會自動在 return 後面如果有換行時，自動加上分號
// prettier-ignore
function add1() {
  var a = 1, b = 2;
  return  
    a + b;
}

console.log(add1()) // undefined

// 必需要加上群組運算子，讓 return 後面在換行時，不要被 ASI 加上分號結束
// prettier-ignore
function add2() {
  var a = 1, b = 2;
  return ( 
    a 
    + 
    b
  );
}

console.log(add2(1, 2)) // 3
