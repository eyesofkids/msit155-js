// 使用var的"函式作用域"
for (var i = 0; i < 10; i++) {
  console.log('i=', i)
}

console.log('after for loop, i=', i)

// 比較使用let的"區塊作用域"
for (let j = 0; j < 10; j++) {
  console.log('j=', j)
}

console.log('after for loop, j=', j)
