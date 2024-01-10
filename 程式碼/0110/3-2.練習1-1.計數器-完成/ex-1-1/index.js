// total是由id="total"的元素物件
const total = document.getElementById('total')

// total.innerText是total元素物件的文字內容
// 也可以用來設定文字內容
// console.log(total.innerText)
// total.innerText = 888

// total.addEventListener是total元素物件的事件監聽器
// 第一個參數是事件名稱，第二個參數是事件發生時要執行的函式
total.addEventListener('click', function () {
  // 從網頁上得到的文字是字串類型，Number()是將文字轉成數字
  // 數字與字串作加法運算時，會自動將數字轉成字串，因此要先將文字轉成數字
  total.innerText = Number(total.innerText) + 1
})
