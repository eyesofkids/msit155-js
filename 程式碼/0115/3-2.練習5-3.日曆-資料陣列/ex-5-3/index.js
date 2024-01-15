//tbody
const data = document.getElementById('data')

console.log(data)

// 定義目前的年月(使用數字類型，代表要呈現的年與月)
const year = 2024
const month = 1

// firstDay 是這個月的第一天是星期幾(索引值0~6，星期日為0)
const firstDay = new Date(`${year}/${month}/1`).getDay()

console.log(firstDay)

// days 是這個月有幾天
// 公式 new Date(y, m, 0).getDate()
// 2009 年的 9 月就是使用`new Date(2009, 9, 0).getDate()`
const days = new Date(year, month, 0).getDate()

console.log(days)

// 最前面的空白陣列
const frontEmptyData = []

for (let i = 0; i < firstDay; i++) {
  frontEmptyData.push('')
}

// 中間資料陣列
const valueData = []

for (let i = 0; i < days; i++) {
  // 轉為字串，統一陣列中的資料類型
  valueData.push(String(i + 1))
}

// 最後的空白陣列
// 最前面的空白陣列
const tailEmptyData = []

for (let i = 0; i < 42 - firstDay - days; i++) {
  tailEmptyData.push('')
}

console.log(frontEmptyData, valueData, tailEmptyData)

const allData = [...frontEmptyData, ...valueData, ...tailEmptyData]

console.log(allData)