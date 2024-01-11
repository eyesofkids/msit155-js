// 獲取網頁上對應的dom元素物件
// 以下定義為jsdoc定義，目的只是為了告訴vscode編輯器，此元素為
// HTMLInputElement，而不是一般的HTMLElement，可提供更多自動完成協助
/**
 * @type HTMLInputElement
 */
const height = document.getElementById("height");
/**
 * @type HTMLInputElement
 */
const weight = document.getElementById("weight");
// button
const calc = document.getElementById("calc");
// p
const result = document.getElementById("result");

// 檢查dom元素是否有正確獲得
// console.log(height, weight, calc, result);

// BMI = 體重(公斤) / 身高<sup>2</sup>(公尺平方)

// 加入滑鼠點按事件觸發函式在 計算(calc) 按鈕上
calc.addEventListener('click', function () {
    // 1.獲得身高、體重輸入值(注意要轉為數字)
    const w = Number(weight.value);
    const h = Number(height.value);

    // 2. 計算bmi
    const bmi = w / Math.pow(h / 100, 2);

    // 3. 呈現在網頁上result
    // 保留小數點後一位，之後四捨五入
    result.innerText = bmi.toFixed(1);
});


