// 結論:

// for loop(優點)
// 1. for/while迴圈是處理陣列(或物件)的最基本的方法，各種程式語言都有同樣語法
// 2. for/while迴圈是處理陣列(或物件)低消耗高效率、彈性最高的方法。速度約快迭代方法(如forEach..)10x以上
// 3. for/while迴圈裡可以使用continue或break進行流程控制，提早跳出迴圈。迭代方法(如forEach..)沒有。

// 迭代(iteration)方法(優點)
// 1. 迭代方法(如forEach..)的閱讀性很高，可以為特定需求加入/設計專用的、新的迭代方法
// 2. 迭代方法(如forEach..)可以使用連鎖語法，語法更簡短
// 3. 迭代方法是表達式，對新式框架需求純函式或表達式(嵌入值時)的語法使用更便利簡單

//範例: 尋找值大於5的第一個成員的索引值
const aac = [1, 3, 6, 5, 4, 9]

let foundIndex = 0

for (let i = 0; i < aac.length; i++) {
  if (aac[i] > 5) {
    foundIndex = i
    break
  }
}

// 範例: 尋找值大於4的，然後乘2
const aaa = [1, 2, 3, 6, 3, 5]
const aab = aaa.filter((v) => v > 4).map((v) => v * 2)

//---------------------------------------------
// 迭代(iteration)
const aa = [1, 2, 3]

//for 是以索引值遞增(或遞減)的角度，限制在一個範圍內的循環語法
for (let i = 0; i < aa.length; i++) {
  aa[i] = aa[i] * 2
}

// forEach
const ab = [1, 2, 3]

// forEach迭代方法，是以該陣列方法呼叫為出發，用回呼函式(callback)依序處理各成員值的語法
ab.forEach(function (value, index, array) {
  array[index] = value * 2
})

// map(映射)
const ac = [1, 2, 3]

// map會回傳一個新的陣列，不會改變原本的陣列
const ad = ac.map(function (value, index, array) {
  return value * 2
})

console.log(ac, ad)

//---------------------------------------------
// CPS風格解說(callback)
function add2(v1, v2) {
  return v1 + 2
}

// const add2 = function (v1, v2) {
//     return v1 + 2;
// }

/// fn, func, Fn, callback, cb....
// run/call/invoke
function add1(x, y, callback) {
  return callback(x, y) + 1
}

// return add2(2,5) + 1
add1(2, 5, add2)

//
add1(2, 5, function (v1, v2) {
  return v1 + v2 + 2
})

//---------------------------------------------
// 迴圈語法
// for (let i = 0; i < 3; i++) {
//     console.log(i + 1);
// }

// while
// let j = 0;
// while (j < 3) {
//     console.log(j + 1);
//     j++;
// }
