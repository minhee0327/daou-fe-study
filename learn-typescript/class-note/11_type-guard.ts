interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

function introduce(): Developer | Person{
    return {
        name: 'Tony',
        age: 33,
        skill: 'Iron Making'
    }
}

var tony = introduce();
// console.log(tony.skill) //union 은 공동 속성에만 접근할 수 있으니까 error (접근 못한다)

if((tony as Developer).skill){
    var skill = (tony as Developer).skill;
    console.log(skill);
}else if((tony as Person).age){
    var age = (tony as Person).age;
    console.log(age);
}

//타입 가드
function isDeveloper(target: Developer | Person): target is Developer{
   return (target as Developer).skill !== undefined;
}


if(isDeveloper(tony)){
    tony.skill
}else{
    tony.age
}








