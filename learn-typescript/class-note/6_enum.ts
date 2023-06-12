enum Shoes{
    Nike = 'nike',
    Adidas = 'adidas'
}

let myShoes = Shoes.Nike;
console.log(myShoes);

//예제

enum Answer{
    YES = 'y',
    NO= 'n',
}
function askQuestion(answer: Answer){
    if(answer === Answer.YES){
        console.log('정답입니다.')
    }
    if(answer === Answer.NO){
        console.log('오답입니다.')
    }
}

askQuestion(Answer.YES);