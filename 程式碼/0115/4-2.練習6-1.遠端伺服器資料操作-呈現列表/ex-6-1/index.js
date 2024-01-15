const serverUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'

const updateView = (data) => {
  console.log(data)
  const display = data
    .map((v, i) => {
      return `<li>${v.id}/${v.name}/${v.age}</li>`
    })
    .join('')

  document.getElementById('users').innerHTML = display
}

fetch(serverUrl, { method: 'get' })
  .then(function (response) {
    //處理
    return response.json()
  })
  .then(function (data) {
    updateView(data)
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
