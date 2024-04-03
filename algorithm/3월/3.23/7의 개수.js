function solution(array) {
    // 요소의 길이가 각각 1이 되도록 만들어주기
    const new_arr = array.join('').split('');  
    let cnt = 0;
    
    new_arr.map((e) => { 
        e == 7 ? cnt++ : "";
    })
    return cnt;
}