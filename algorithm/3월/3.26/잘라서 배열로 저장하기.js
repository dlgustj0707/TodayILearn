function solution(my_str, n) {
    let arr = my_str.split(''); // 배열로 만들어주기
    let str = '';
    const answer = [];
    arr.map((e) => {
        // str의 길이를 보고 길이가 n이 아니면 str에 추가
        str += e;
        if (str.length === n){
            answer.push(str);
            str = '';
        }
    })
    // 마지막에 str에 값이 남아있으면 push 해준다
    str.length != 0 ? answer.push(str): ""; 
    return answer;
}

