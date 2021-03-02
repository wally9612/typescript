//函数中带有解构赋值的类型注解
function add(
    {first, second} : {first: number, second: number}
    ): number {
    return first + second
}
const totals = add({first: 1, second:3})