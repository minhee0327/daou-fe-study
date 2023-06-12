interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
}

var developer: Developer;
var person: Person;
//developer = person; //error! => 왼쪽에 더 많은 솏어을 가지고 있어서 타입 호환이 불가능 (skill 이 없으니깐)

//오른쪽이 더 많이 있을 때 타입이 호환이 된다.
person = developer; //ok



//함수 (add < sum)
var add = function(a: number){

}

var sum = function (a: number, b: number){
    // ...
}

//add = sum  //error
//sum = add  //ok




// 제네릭
interface Empty<T>{

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data: T;
}

var notEmpty1: NotEmpty<string>
var notEmpty2: NotEmpty<number>
//notEmpty1 = notEmpty2 // error
//notEmpty2 = notEmpty1 // error

