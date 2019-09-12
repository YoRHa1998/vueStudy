let name = "小明";
function sum(num1,num2) {
   return num1+num2
};
sum(10,20)
// 1.导出一个对象
export {
   name,sum
}

//2.直接导出声明的变量
export let movie = "火影忍者"
export let flag = true

//3.导出一个函数/类
export function count(num3,num4) {
   return num3 * num4
}

export class person{
   add(num5,num6){
      return num5 + num6
   }
}

// 4.export default 不定义导出的名字，让导入的人自己定义名字  每个模板中只能有一个export default
const msg = "这是export default"
export default msg