const total = document.getElementById('total')

// console.log(total.innerText)

// total.innerText = 888

total.addEventListener('click', function () {
  total.innerText = Number(total.innerText) + 1
})
