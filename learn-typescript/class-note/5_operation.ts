/*
function logMessage(value: any){
    console.log(value);
}

logMessage('hello')
logMessage(100);
*/
var seho: string | number | boolean

function logMessage(value: string|number){
    if(typeof value === "number"){
        value.toLocaleString();
    }
    if(typeof value  === "string"){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello')
logMessage(100)


interface Developer{
    name: string,
    skill: string,
}

interface Person{
    name: string,
    age: number,
}

// function askSomeone(someone: Developer | Person){
//     // someone.name;
// }
// askSomeone({name: '디벨로퍼', skill: '웹 개발'})
// askSomeone({name: '캡틴', age: 100})



// var capt: string & number & boolean; //string 이면서 number 면서 boolean 인 타입 => never(없음;;)
function askSomeone(someone: Developer & Person){
    someone.name;
    someone.age;
    someone.skill;
}

// askSomeone({name: '디벨로퍼', skill: '웹 개발'}) //=> error: age 정보가 없어서 에러가 발생