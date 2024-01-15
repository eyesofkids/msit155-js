const serverUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

// 顯示資料用的函式
const updateView = (data) => {
  // console.log(data)
  const display = data
  // 將陣列中的每個物件轉成HTML字串
  // .map((v, i) => {
  //   return `<li>${v.id}/${v.name}/${v.age}</li>`
  // })
  // .join('') //將陣列轉成字串

  // 顯示在網頁上
  // document.getElementById('users').innerHTML = display

  // -------------------------------
  // 方式二：用 for 迴圈與innerHTML來處理
  // for (let i = 0; i < data.length; i++) {
  //   document.getElementById('users').innerHTML += `<li>${data[i].name}</li>`
  // }

  // -------------------------------
  // 方式三: 用 for 迴圈與appendChild來處理
  // for (let i = 0; i < data.length; i++) {
  //   let li = document.createElement('li')
  //   li.textContent = data[i].name
  //   document.getElementById('users').appendChild(li)
  // }
}

fetch(serverUrl, { method: 'get' })
  .then(function (response) {
    //處理
    return response.json()
  })
  .then(function (data) {
    updateView(data) // 呼叫更新畫面的函式
    return data
  })
  .catch(function (err) {
    // Error :(
  })
