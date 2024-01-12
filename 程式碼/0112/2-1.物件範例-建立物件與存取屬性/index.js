// 物件字面值(Object Literal)
const employee = {
  id: 'A001',
  name: '陳小花',
  age: 25,
}

// 存取屬性，用 . 或 []
console.log(employee.name)
console.log(employee['name'])

// 用變數當屬性名稱(用 [] 存取)，需要用字串作為變數值
const x = 'na'
console.log(employee[x + 'me'])

// 加入新屬性
employee.phone = '0912345666'
console.log(employee)

// 刪除屬性
delete employee.age

// 工廠模式(建立新物件)
function createEmployee(id, name, age, phone) {
  // 這裡可以由傳入值來調整所需的屬性值，建立單例物件
  return { id, name, age, phone }
}

const oa = createEmployee('B001', '張小草', 33, '0911111234')
console.log(oa)

// 類別語法(建立新物件)
class Employee {
  // 建構式
  constructor(id, name, age, phone) {
    // this會指向由new運算子要建立的新物件
    this.id = id
    this.name = name
    this.age = age
    this.phone = phone
  }
}

const ob = new Employee('B002', '李四', 25, '0922111234')
console.log(ob)
