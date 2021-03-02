// 基础类型
//可以调用number下面的属性和方法
const count: number | string =2 
count.toFixed()
count.toExponential()
count.toLocaleString()
count.valueOf()

//对象类型
class Person{}

const teacher: {
    name: string;
    age: number
} = {
    name: "name",
    age: 25
}

const numbers: number[] = [1,2,3]

const dell: Person = new Person()


const getTotal: () => number = () => {
    return 123
}