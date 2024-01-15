//tbody
const data = document.getElementById('data')

console.log(data)

// 定義目前的年月(使用數字類型，代表要呈現的年與月)
const year = 2024
const month = 1

// --- 產生日期資料陣列 START ---
// firstDay 是這個月的第一天是星期幾(索引值0~6，星期日為0)
const firstDay = new Date(`${year}/${month}/1`).getDay()

// days 是這個月有幾天
// 公式 new Date(y, m, 0).getDate()
// 2009 年的 9 月就是使用`new Date(2009, 9, 0).getDate()`
const days = new Date(year, month, 0).getDate()

data.innerHTML = _.chain([
  ...Array(firstDay).fill(''), // 最前面的空白陣列(根據第一天是星期幾，決定要呈現幾個空白)
  ...Array(days)
    .fill(1)
    .map((v, i) => i + 1), // 中間資料陣列(日期資料)，產生1...N的陣列
  ...Array(42 - firstDay - days).fill(''), // 最後的空白陣列(42是7x6所有的數量 - 前面空白數- 中間資料數)
])
  .map((v) => `<td>${v}</td>`)
  .chunk(7)
  .map((v) => `<tr>${v.join('')}</tr>`)
  .join('')

// 最前面的空白陣列(根據第一天是星期幾，決定要呈現幾個空白)
//const frontEmptyData = Array(firstDay).fill('')
// 中間資料陣列(日期資料)
//const valueData = Array(days)
//   .fill(1)
//   .map((v, i) => i + 1)
// 最後的空白陣列(42是7x6所有的數量 - 前面空白數- 中間資料數)
//const backEmptyData = Array(42 - firstDay - days).fill('')

// const allData = [
//   ...Array(firstDay).fill(''), // 最前面的空白陣列(根據第一天是星期幾，決定要呈現幾個空白)
//   ...Array(days)
//     .fill(1)
//     .map((v, i) => i + 1), // 中間資料陣列(日期資料)，產生1...N的陣列
//   ...Array(42 - firstDay - days).fill(''), // 最後的空白陣列(42是7x6所有的數量 - 前面空白數- 中間資料數)
// ].map((v, i) => `<td>${v}</td>`) // 加上

// console.log(allData)
// --- 產生日期資料陣列 END ---

// 2. 進行分塊
// const allDataChunks = _.chunk(allData, 7)
// console.log(allDataChunks)

// 3. 呈現
// 以下為呈現在網頁的id=data上
// data.innerHTML = _.chunk(allData, 7)
//   .map((v, i) => `<tr>${v.join('')}</tr>`)
//   .join('')
