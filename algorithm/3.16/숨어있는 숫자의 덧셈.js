function solution(my_string) {
    const arr = [...my_string].filter((e) => {
        // e가 숫자인 문자인지 확인
        return e == "1" || e == "2" || e == "3" ||
            e == "4" || e == "5" || e == "6" ||
            e == "7" || e == "8" || e == "9";   
    });
    
    const newArr = arr.map(Number); // 문자를 숫자로 바꿔줌
    let sum = 0;
    newArr.forEach((e)=>{
        sum += e;
    })
    return sum;
}

//
function solution(my_string) {
    return my_string.split("").filter((v)=> !isNaN(v)).reduce((a,b) => parseInt(a)+parseInt(b));
}