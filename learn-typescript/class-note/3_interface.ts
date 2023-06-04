interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}

const capt = {age: 30, name: 'captain'}
getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
}

//인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0]; //'a'


//딕셔너리 패턴: 인덱싱과 유사한 방식
interface StringRegexDictionary{
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(value => {})
obj['cssFile'] = /\.ts$/


//인터페이스 확장(상속) : OOP 상속, js prototype
interface Person{
    name: string,
    age: number,
}

interface Developer extends Person{
    language: string,
}

var captain: Developer = {
    name: 'captain',
    age: 30,
    language: 'ts'
}

