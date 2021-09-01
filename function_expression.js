function sayHi() {
    console.log("Hello");
}

let func = sayHi; // 괄호가 있었다면 함수의 반환 값을 저장시킴. 지금은 함수 자체를 복사

func();
sayHi();

// 콜백함수
function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?",
    function() { alert("동의하셨습니다"); },
    function() { alert("취소 버튼을 누르셨습니다"); }
)