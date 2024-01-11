// total是由id="total"的元素物件
// getElementById是瀏覽器內建的方法，可以從網頁上找到id="total"的元素物件
// getElementById返回的是元素物件(HTMLElement | null)，可以直接使用
const total = document.getElementById('total')

// 這裡可以檢查total是否有找到元素物件
if (total === null) {
  console.log('total是null')
}

// total.innerText是total元素物件的文字內容
// 也可以用來設定文字內容(setter/getter同時都有的設計)
// console.log(total.innerText)
// total.innerText = 888

// total.addEventListener是total元素物件的事件監聽器
// 第一個參數是事件名稱，第二個參數是事件發生時要執行的函式
total.addEventListener('click', function () {
  // 從網頁上得到的文字是字串類型，Number()是將文字轉成數字
  // 數字與字串作加法運算時，會自動將數字轉成字串，因此要先將文字轉成數字
  total.innerText = Number(total.innerText) + 1
})
