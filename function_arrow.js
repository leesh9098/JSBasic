let age = prompt("나이를 알려주세요", 18);

let welcome = (age < 18) ?
    () => alert("안녕") :
    () => alert("안녕하세요");

welcome();

// Quiz
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?",
    () => alert("동의하셨습니다"),
    () => alert("취소 버튼을 누르셨습니다")
);

let a = 8;
a **= 2;
console.log(a);