//基本数据类型

// 1 boolean
/*布尔类型有两种 true 和false */
let isDone :boolean = false;
isDone=true;

// 2 number
let num1 :number = 213;
let num2 :number = 0x123;
let num3 :number = 0o213;
let num4 :number = 0b1001;

// 3 string
let str1 :string = 'xiaochuan';
console.log(str1);

// 4 array 数组
/*以下两种写法 */


let arr1 :Array<number> = [1,23,6,8,9];
let arr2 :number[] = [2,1,4,9];

// 5 元组 tuple
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

let t1 :[string,number] = ['hello',123];

// 6 enum 

enum Color{
    blue,
    green,
}

let color :Color = Color.blue;
console.log(color);                 //0
console.log(Color[0]);              //blue
console.log(Color[1]);              //green

// 7 any类型
/* 们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查
*/

let notSure :any;
notSure = 'hello world';
notSure = false;            //正确

// 8 void类型
/*某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 
当一个函数没有返回值时，你通常会见到其返回值类型是 void
*/

function f() :void{
    console.log('hello world');
}

// 9 Null 和 Undefined
/*
TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 
和 void相似，它们的本身的类型用处不是很大
默认情况下null和undefined是所有类型的子类型。*/
let u :undefined = undefined;
let n :null = null;

// 10 never

/**never类型表示的是那些永不存在的值的类型。 
 * 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 *  变量也可能是 never类型，当它们被永不为真的类型保护所约束时。 */
//返回never的函数必须存在无法达到的终点
 function err() :never{
    throw new Error('this is a error');
}
function f1() :never{
    while(true){

    }
}