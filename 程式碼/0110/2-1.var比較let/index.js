// 使用var的"函式作用域"
// 因為var沒有區塊作用域，所以for迴圈結束後，i仍然存在
for (var i = 0; i < 10; i++) {
  console.log('i=', i)
}

console.log('after for loop, i=', i)

//----------------------------------------------

// 使用let的"區塊作用域"
// 因為let有區塊作用域，所以for迴圈結束後，j不存在
for (let j = 0; j < 10; j++) {
  console.log('j=', j)
}

console.log('after for loop, j=', j)
