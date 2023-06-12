//타입 단언(type assertion)
var a;
a = 20; //숫자할당
a = 'a' //다시 문자 할당
// var b = a; //아직 모름 .. => 처음에 사용한 any 타입으로 인
var b = a as string; //타입스크립트 대신 개발자가 타입을 지정해줌 (-> 타입 단언) => DOM API 조작에 많이 사용된다.


//DOM API 조작
//접근 시점에 document.querySelector가 있는 특정 라인에서 div 가 있다고 보장하지 않을 수 있음
var div = document.querySelector('div');
if(div){
    div.innerText
}