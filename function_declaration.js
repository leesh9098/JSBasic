// 매개변수가 생략되었거나 빈 문자열("")이 엄어오면 변수에 "빈 문자열"이 할당
function showMessage(text) {
    text = text || "빈 문자열";
    console.log(text)
}

showMessage();

// 매개변수 count가 넘어오지 않으면 unknown을 출력
function showCount(count) {
    console.log(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();

//반환 값
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("보호자의 동의를 받으셨나요?");
    }
}

let age = prompt("나이를 알려주세요", 18);

if (checkAge(age)) {
    console.log("접속 허용");
} else {
    console.log("접속 차단");
}

// Quiz 1
function checkAge_quizQuestion(age) {
    return (age > 18) ? true : confirm("보호자의 동의를 받으셨나요?");
}

function checkAge_quizVerticalBar(age) {
    return (age > 18) || confirm("보호자의 동의를 받으셨나요?");
}

// Quiz 2
function min(a, b) {
    if(a < b) {
        return a;
    } else {
        return b;
    }
}

// Quiz 3
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("y?", '');

if (n < 1) {
    alert(`${n}은 양의 정수이어야 합니다.`);
} else {
    alert( pow(x, n) );
}