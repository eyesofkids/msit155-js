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
const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')

// 檢查dom元素是否有正確獲得
// console.log(username, password, login, message)

// 加入滑鼠點按事件觸發函式在 login 按鈕上
login.addEventListener('click', function () {
  // 由於使用者會反覆操作此表單，每次檢查時要先把所有錯誤訊息清空
  usernameError.innerText = ''
  passwordError.innerText = ''

  // 檢查username是否有填寫
  // if (username.value === '') {
  // if (username.value.length === 0) {
  // 應用了falsy的特性，如果username.value是空字串，則為false，否則為true
  // NOT運算子，將後面的值轉為布林值後，再取相反的值
  if (!username.value) {
    usernameError.innerText = '請填寫帳號'
  }

  // 上面的if的寫法相當於下面的這段檢查語法
  // if (username.value) {
  //    有填，所以沒事
  // } else {
  //    errorMessage += 'username沒填'
  // }

  // --------
  // 檢查password是否有填寫
  if (!password.value) {
    passwordError.innerText = '請填寫密碼'
  }

  // 檢查password是否長度大於6，小於10
  if (password.value.length < 6 || password.value.length > 10) {
    passwordError.innerText = '密碼需要長度大於6，小於10'
  }

  // 利用每個欄位的錯誤訊息來偵測是否有錯誤，然後進行聚焦(focus)
  if (usernameError.innerText) {
    username.focus()
    return
  }

  if (passwordError.innerText) {
    password.focus()
    return
  }
})
