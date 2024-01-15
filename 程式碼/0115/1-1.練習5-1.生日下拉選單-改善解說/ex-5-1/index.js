// 獲取網頁上對應的dom元素物件
// 以下定義為jsdoc定義，目的只是為了告訴vscode編輯器，此元素為
// HTMLInputElement，而不是一般的HTMLElement，可提供更多自動完成協助
/**
 * @type HTMLInputElement
 */
const yy = document.getElementById('yy')
/**
 * @type HTMLInputElement
 */
const dd = document.getElementById('dd')
/**
 * @type HTMLInputElement
 */
const mm = document.getElementById('mm')

// 檢查
// console.log(yy, mm, dd)

// 產生選擇的函式
function createOptions(min, max) {
  let options = `<option value="0">請選擇</option>`

  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }

  return options
}

// 使用陣列的map()方法來產生選項
// 產生1...N的陣列
// https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
function createOptions2(min, max) {
  // Array(5) 產生一個長度為5的陣列，內容為undefined
  // fill(1) 將陣列內容填滿1
  // map((v, i) => {}) 將陣列內容一個一個取出，並執行回呼函式
  return Array(max + 2 - min)
    .fill(1)
    .map((v, i) => {
      return `<option value="${i}">${i ? i : '請選擇'}</option>`
    })
}

// 呈現yy選項, 1950~2024
yy.innerHTML = createOptions(1950, 2024)

// 呈現mm選項, 1-12
mm.innerHTML = createOptions(1, 12)
// 如果用陣列的map()方法來產生選項，最後要用join('')來合併成字串
//mm.innerHTML = createOptions2(1, 12).join('')

// 呈現dd選項, 等yy與mm選了之後再決定
dd.innerHTML = `<option value="0">請選擇</option>`

// 定義三個變數，記錄使用者選擇的年月日
// 使用"number"類型，之後要作計算用
// 初始值對應的是"請選擇"這個選項的value為0
let birthY = 0
let birthM = 0
let birthD = 0

// yy選項有改變事件
yy.addEventListener('change', function () {
  // 需要轉為數字，保持變數一直是數字資料類型與之後要作檢查
  birthY = Number(yy.value)

  //年 && 月有值時，呈現日的選項值
  if (birthY && birthM) {
    const maxDays = new Date(birthY, birthM, 0).getDate()
    dd.innerHTML = createOptions(1, maxDays)
    // 內部記錄的日要歸零，要讓使用者重新選擇後再記錄，以免造成記錄錯誤
    birthD = 0
  }

  console.log(birthY, birthM, birthD)
})

// mm選項有改變事件
mm.addEventListener('change', function () {
  // 需要轉為數字，保持變數一直是數字資料類型與之後要作檢查
  birthM = Number(mm.value)

  //年 && 月有值時，呈現日的選項值
  if (birthY && birthM) {
    const maxDays = new Date(birthY, birthM, 0).getDate()
    dd.innerHTML = createOptions(1, maxDays)
    // 內部記錄的日要歸零，要讓使用者重新選擇後再記錄，以免造成記錄錯誤
    birthD = 0
  }

  console.log(birthY, birthM, birthD)
})

// yy選項有改變事件
dd.addEventListener('change', function () {
  // 需要轉為數字，保持變數一直是數字資料類型與之後要作檢查
  birthD = Number(dd.value)
  console.log(birthY, birthM, birthD)
})
