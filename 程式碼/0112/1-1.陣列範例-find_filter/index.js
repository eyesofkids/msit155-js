//
const students = [
  {
    id: '1',
    name: '張小花',
    age: 22,
  },
  {
    id: '2',
    name: '陳小草',
    age: 25,
  },
  {
    id: '3',
    name: '李四',
    age: 30,
  },
]

// find是從左開始尋找，找到符合條件的第一筆資料
const data = students.find(function (value, index, array) {
  return value.age > 26
})

console.log(data)

// filter是把所有符合條件的資料，回傳到一個新的陣列中
const allData = students.filter(function (value, index, array) {
  return value.age > 24
})

console.log(allData)

// --------
// 關於find/findIndex
const ad = [1, 2, 3, 4, 2]

const foundIndex = ad.findIndex(function (value, index, array) {
  return value === 2
})

console.log(foundIndex)

// -------
// 關於拷貝
const ab = [1, 2, 3, [8, 9]]
const ac = [...ab]

ab[1] = 22
ab[3][0] = 88

console.log(ab)
console.log(ac)
console.log(ac === ab)

// ------
// callback說明
const aa = [1, 2, 3, 4]

const callback = function (value, index, array) {
  console.log(value, index, array)
  array[index] = value * 2
}

aa.forEach(callback)

console.log(aa)
