//타입 추론 기본1
var a = 10;

function getB(b= 10): any{
    var c = 'hi';
    return b + c;
}

//타입 추론 기본2
// interface Dropdown<T>{
//     value: T;
//     title: string;
// }
//
// var shoppingItem: Dropdown<string> = {
//     value : 'abc',
//     title: 'hello'
// }

//타입 추론 기본3
interface Dropdown<T>{
    value: T;
    title: string;
}
interface DetailDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
    //value, title (dropdown)
}

var detailedItem: DetailDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 10,
    tag: 20,
}

//Best Common Type: 타입스크립트가 해당 코드를 어떤 타입인지 매겨가는(해석하는) 방식
var arr = [1,2,true];
