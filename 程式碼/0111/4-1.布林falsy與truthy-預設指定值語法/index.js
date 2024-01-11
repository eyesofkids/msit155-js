function add(x, y) {
  // falsy: false, 0, '', null, undefined, NaN
  // 這裡的 || 是或的意思，用的是falsy判斷
  // 如果 x 是 falsy，則 x1 = 1，否則 x1 = x
  // 指定預設值
  const x1 = x || 1
  const y1 = y || 2
  console.log(x, y)
  console.log(x1, y1)

  return x1 + y1
}

console.log(add())

// ----------------------------------------------

// ES6後加入的傳入參數預設值的新語法
// 只有沒給值(或給undefined)的時候才會用預設值
function add2(x = 1, y = 2) {
  console.log(x, y)
  return x + y
}

console.log(add2())
