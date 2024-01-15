// fetch 範例
// 伺服器的網址，回應為 JSON 格式
const serverUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

// 顯示資料用的函式
const log = (users) => {
  console.log(users)
  document.getElementById(
    'user_id1'
  ).innerHTML = `name: ${users[0].name} age: ${users[0].age}`
}

// 使用 fetch 來取得資料
fetch(serverUrl, { method: 'get' })
  // 用 then 來接收回應
  .then(function (response) {
    // 轉成 json，然後回傳另個 promise
    return response.json()
  })
  // 用 then 來接收資料，解析後的資料會在 data 變數中
  .then(function (data) {
    log(data)
    return data
  })
  // 用 catch 錯誤處理用
  .catch(function (err) {
    // Error :(
  })

// 同步程序
// let a = 1
// let b = a + 1 + 4 - 100
// let c = b + 2

// 異步程序
// console.log('a') //同步

// setTimeout(() => {
//   console.log('b') // 異步
// }, 0)

// console.log('c') //同步
// console.log('d')
