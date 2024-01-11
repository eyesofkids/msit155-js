function add(x, y) {
  const x1 = x || 1
  const y1 = y || 2
  console.log(x, y)
  console.log(x1, y1)

  return x1 + y1
}

console.log(add())

function add2(x = 1, y = 2) {
  console.log(x, y)
  return x + y
}

console.log(add2())
