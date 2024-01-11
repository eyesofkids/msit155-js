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
// console.log(username, password, login, message)

// 加入滑鼠點按事件觸發函式在 login 按鈕上
login.addEventListener('click', function () {
  let errorMessage = ''

  // 檢查username是否有填寫
  // if (username.value === '') {
  // if (username.value.length === 0) {
  if (!username.value) {
    errorMessage += 'username沒填'
  }

  // 上面的if的寫法相當於下面的這段檢查語法
  // if (username.value) {
  //   // 有填，所以沒事
  // } else {
  //    errorMessage += 'username沒填'
  // }

  // --------
  // 檢查password是否有填寫
  if (!password.value) {
    // 如果errorMessage目前裡面有資料，則加逗號在前面，不然就是第一個錯誤訊息
    const prefix = errorMessage ? ', ' : ''
    errorMessage += prefix + 'password沒填'
  }

  message.innerText = errorMessage
})
