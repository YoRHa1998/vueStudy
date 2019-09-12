//1.导入的是{}中定义的变量和函数
import {name,sum} from "./aaa.js" 
console.log(name);
console.log(sum(10,20));

//2.导入的是直接声明的变量
import {movie,flag} from "./aaa.js"
console.log(movie);
console.log(flag);

//3.导入export的function
import {count} from "./aaa.js"
console.log(count(10,20));

//4。导入export中的类
import {person} from "./aaa.js"
let cla = new person()
console.log(cla.add(320,123));

//5.导入export default 不再需要大括号了，代表这是导入的export default的东西，需要自己命名
import message from "./aaa.js"
console.log(message);

//6.导入模板中的所有export,用* as 自定义名字 来导入，使用时用 自定义名字.变量名字 来使用
import * as all from "./aaa.js"
console.log(all.name);







