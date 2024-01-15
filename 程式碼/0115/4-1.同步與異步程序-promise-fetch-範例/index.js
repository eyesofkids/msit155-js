const serverUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

const log = (users) => {
  console.log(users)
  document.getElementById('user_id1').innerHTML =
    `name: ${users[0].name} age: ${users[0].age}`
}

fetch(serverUrl, { method: 'get' })
  .then(function (response) {
    //處理
    return response.json()
  })
  .then(function (data) {
    log(data)
    return data
  })
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
