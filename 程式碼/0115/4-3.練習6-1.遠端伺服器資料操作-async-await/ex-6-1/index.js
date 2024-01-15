const serverUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

// 顯示資料用的函式
const updateView = (data) => {
  // console.log(data)
  // const display = data
  //   // 將陣列中的每個物件轉成HTML字串
  //   .map((v, i) => {
  //     return `<li>${v.id}/${v.name}/${v.age}</li>`
  //   })
  //   .join('') //將陣列轉成字串

  //顯示在網頁上
  // document.getElementById('users').innerHTML = display

  // -------------------------------
  // 方式二：用 for 迴圈與innerHTML來處理
  for (let i = 0; i < data.length; i++) {
    document.getElementById('users').innerHTML += `<li>${data[i].name}</li>`
  }

  // -------------------------------
  // 方式三: 用 for 迴圈與appendChild來處理
  // for (let i = 0; i < data.length; i++) {
  //   let li = document.createElement('li')
  //   li.textContent = data[i].name
  //   document.getElementById('users').appendChild(li)
  // }
}

// await關鍵字只能在async函式中使用，async函式會回傳一個Promise物件
// top-level await目前要在模組類型中支援(在瀏覽器中不直接支援，可以用在Node.js中)
async function getUsers() {
  // 使用try...catch陳述來處理錯誤的
  try {
    // 異步轉同步的陳述句(在這一行會等候伺服器回應)
    const response = await fetch(serverUrl, { method: 'GET' })
    // 異步轉同步的陳述句(等候回應物件轉為JS的物件資料)
    const data = await response.json()
    // 更新網頁上的視圖資料
    updateView(data)
  } catch (err) {
    console.error(err)
  }
}

// 記得呼叫函式
getUsers()

// fetch(serverUrl, { method: 'GET' })
//   .then(function (response) {
//     //處理
//     return response.json()
//   })
//   .then(function (data) {
//     updateView(data) // 呼叫更新畫面的函式
//     return data
//   })
//   .catch(function (err) {
//     // Error :(
//     // console.error(err)
//   })
