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
console.log(yy, mm, dd)

// 呈現yy選項, 1950~2024

// 呈現mm選項, 1-12

// 呈現dd選項, 等yy與mm選了之後再決定
