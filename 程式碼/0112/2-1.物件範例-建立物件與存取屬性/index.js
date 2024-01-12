const employee = {
  id: 'A001',
  name: '陳小花',
  age: 25,
}

console.log(employee.name)
console.log(employee['name'])

const x = 'na'
console.log(employee[x + 'me'])

// 加入新屬性
employee.phone = '0912345666'
console.log(employee)

// 工廠模式(建立新物件)
function createEmployee(id, name, age, phone) {
  // 這裡可以由傳入值來調整所需的屬性值
  return { id, name, age, phone }
}

const oa = createEmployee('B001', '張小草', 33, '0911111234')
console.log(oa)

// 類別語法(建立新物件)
class Employee {
  constructor(id, name, age, phone) {
    this.id = id
    this.name = name
    this.age = age
    this.phone = phone
  }
}

const ob = new Employee('B002', '李四', 25, '0922111234')
console.log(ob)
