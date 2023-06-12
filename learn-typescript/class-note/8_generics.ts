// function logText(text){
//     console.log(text);
//     return text;
// }
//
// logText(10);     //숫자 10
// logText('하이');  //문자열 하이
// logText(true);   //진위값 true


// function logText<T>(text: T): T{
//     console.log(text);
//     return text;
// }
//
// logText<string>('하이');


// 기존의 타입 정의 방식의 문제
//단순히 타입이 다르다해서 중복되는 코드를 계속 양산하는 형태가 되어버림 (가독성뿐만 아니라 코드가 비대해짐)
// function logText(text: string){
//     console.log(text);
//     return text;
// }
//
// function logNumber(num: number){
//     console.log(num);
//     return num;
// }
// logText('a');
// logNumber(10);


/**
 * 유니온타입을 이용한 선언 방식의 문제
 * 들어가는 인풋의 문제는 해결이 되는데,
 text, number들의 사용가능한 메서드들은 교집합이라서, text. ~ 로 메서드들을 사용하려면 사용하고자 하는게 없을 수 있다.
 또한 반환했을 때 ‘a’ 를 넣었지만, string|number를 반환하기를 기대하기 때문에 var a에서 a.~ 메서드를 호출하면 호출되지 않는다. (스트링이 추론되지 않으니까 쓸수가 없다)
 */
// function logText(text: string| number){
//     console.log(text);
//     return text;
// }
//
// logText('a');
// logText(10);


/**
 * 제네릭의 장점과 타입 추론에서의 이점?
 *
 *
 *
 */


function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');//호출하는 시점에 string을 받아서 쓰겠다고 정의를 내린거
str.split('')

const flag = logText<boolean>(true);


/**
 * 인터페이스에 제네릭을 선언하는 방법
 */

// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
//
// const obj: Dropdown = {value:'10', selected: false}

interface Dropdown<T> {
    value: T,
    selected: boolean;
}

const obj: Dropdown<string> = {value: 'abc', selected: false};


// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length)
//     text.forEach(function(text){
//         console.log(text);
//     })
//     return text;
// }
//
// logTextLength<string>(['hi']);



// 제네릭 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType{
//     length: number;
// }
//
// function logTextLength<T extends LengthType>(text: T): T{
//     text.length;
//     return text;
// }
//
// logTextLength('a'); //ok: string 에는 length 가 있다.
// logTextLength({length: 1}); //ok
// logTextLength(1); //error: number 에는 length 가 있다.


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

//shoppingItem 의 키들중 한가지가 T가 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");