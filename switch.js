const browser = 'Chrome'

// Quiz 1
// switch (browser) {
//     case 'Edge':
//         console.log("Edge를 사용 중입니다.");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case Opera:
//         console.log("저희 서비스가 지원되는 브라우저를 사용하고 계시군요");
//         break;
//     default:
//         console.log("현재 페이지가 괜찮아 보이길 바랍니다!");
// }

// Answer 1
if (browser == 'Edge') {
    console.log("Edge를 사용 중입니다.")
} else if (
    browser == 'Chrome' || browser == 'Firefox' || browser == 'Opera'
    ) {
    console.log("저희 서비스가 지원되는 브라우저를 사용하고 계시군요")
}

//Quiz 2
let a = +prompt('a?', '');

// if (a == 0) {
//     alert( 0 );
// }

// if (a == 1) {
//     alert( 1 );
// }

// if (a == 2 || a == 3) {
//     alert( '2,3' );
// }

//Answer 2
switch(a) {
    case 0:
        alert ( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}