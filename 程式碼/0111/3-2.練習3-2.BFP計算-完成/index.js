// 獲取網頁上對應的dom元素物件
// 以下定義為jsdoc定義，目的只是為了告訴vscode編輯器，此元素為
// HTMLInputElement，而不是一般的HTMLElement，可提供更多自動完成協助
/**
 * @type HTMLInputElement
 */
const height = document.getElementById('height')
/**
 * @type HTMLInputElement
 */
const weight = document.getElementById('weight')
/**
 * @type HTMLInputElement
 */
const age = document.getElementById('age')
/**
 * @type HTMLInputElement
 */
const radios = document.getElementsByName('sex')
// button
const calc = document.getElementById('calc')
// p
const result = document.getElementById('result')

// 檢查dom元素是否有正確獲得
// console.log(height, weight, calc, result);

// BMI = 體重(公斤) / 身高<sup>2</sup>(公尺平方)

// 加入滑鼠點按事件觸發函式在 計算(calc) 按鈕上
calc.addEventListener('click', function () {
  // 1.獲得身高、體重輸入值(注意要轉為數字)
  const w = Number(weight.value)
  const h = Number(height.value)

  // age
  const a = Number(age.value)

  // sex
  let s = ''

  for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // 尋找被選取的radio，並取得其value
      s = radios[i].value
      // 只有一個radio可以被選取，不用再檢查其他的
      break
    }
  }

  // 2. 計算bmi
  const bmi = w / Math.pow(h / 100, 2)

  // 男: BFP = 1.20 × BMI + 0.23 × Age - 16.2
  // 女: BFP = 1.20 × BMI + 0.23 × Age - 5.4
  // 計算bfp
  const bfp = 1.2 * bmi + 0.23 * a - (s === '男' ? 16.2 : 5.4)

  // 3. 呈現在網頁上result
  // 保留小數點後一位，之後四捨五入
  result.innerText = bfp.toFixed(2)
})
