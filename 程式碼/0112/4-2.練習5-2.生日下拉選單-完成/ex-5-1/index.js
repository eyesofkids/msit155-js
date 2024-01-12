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
//console.log(yy, mm, dd)

// 產生選擇的函式
function createOptions(min, max) {
  let options = `<option value="0">請選擇</option>`

  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }

  return options
}

// 呈現yy選項, 1950~2024
yy.innerHTML = createOptions(1950, 2024)

// 呈現mm選項, 1-12
mm.innerHTML = createOptions(1, 12)

// 呈現dd選項, 等yy與mm選了之後再決定
dd.innerHTML = `<option value="0">請選擇</option>`

let birthY = 0
let birthM = 0
let birthD = 0

// yy選項有改變事件
yy.addEventListener('change', function () {
  birthY = Number(yy.value)

  // yy 與 mm有值時，產生dd的選項
  if (birthY && birthM) {
    const maxDays = new Date(birthY, birthM, 0).getDate()
    dd.innerHTML = createOptions(1, maxDays)
    birthD = 0
  }
})

// mm選項有改變事件
mm.addEventListener('change', function () {
  birthM = Number(mm.value)
  // yy 與 mm有值時，產生dd的選項
  if (birthY && birthM) {
    const maxDays = new Date(birthY, birthM, 0).getDate()
    dd.innerHTML = createOptions(1, maxDays)
    birthD = 0
  }
})

// yy選項有改變事件
dd.addEventListener('change', function () {
  birthD = Number(dd.value)
})
