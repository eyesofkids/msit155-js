// 1. 獲取網頁上的DOM元素
// input
/**
 * @type HTMLInputElement
 */
const money = document.getElementById('money')
// button
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')
// p
const result = document.getElementById('result')

// 這裡可以檢查
// console.log(money, usd2twd, twd2usd, result)

usd2twd.addEventListener('click', function () {
  // 1. 得到money輸入的數字(記得文字要轉成數字)
  const v = Number(money.value)

  // 2. 乘以 31.10 呈現在result.innerText
  // 使用 toFixed方法(數字用->轉字串)，可以格式化小數點後保留幾位
  result.innerText = '新台幣:' + (v * 31.1).toFixed(0)
})

twd2usd.addEventListener('click', function () {
  // 1. 得到money輸入的數字(記得文字要轉成數字)
  const v = Number(money.value)

  // 2. 乘以 31.10 呈現在result.innerText
  // 使用 toFixed方法(數字用->轉字串)，可以格式化小數點後保留幾位
  result.innerText = '美金:' + (v / 31.1).toFixed(2)
})
