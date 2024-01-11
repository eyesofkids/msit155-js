// 獲取網頁上對應的dom元素物件
// 以下定義為jsdoc定義，目的只是為了告訴vscode編輯器，此元素為
// HTMLInputElement，而不是一般的HTMLElement，可提供更多自動完成協助
/**
 * @type HTMLInputElement
 */
const username = document.getElementById('username')
/**
 * @type HTMLInputElement
 */
const password = document.getElementById('password')
// button
const login = document.getElementById('login')
// p
const message = document.getElementById('message')

// 檢查dom元素是否有正確獲得
// console.log(height, weight, calc, result);

// BMI = 體重(公斤) / 身高<sup>2</sup>(公尺平方)

// 加入滑鼠點按事件觸發函式在 計算(calc) 按鈕上
login.addEventListener('click', function () {})
