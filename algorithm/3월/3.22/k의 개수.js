function solution(i, j, k) {
    var arr = [];
    for (let index = i; index <= j; index++){
        arr.push(index); // i~j까지 배열에 넣기
    }
    // 문자열로 바꾸고 다시 배열로 바꾸기(요소의 길이가 1일수 있도록) 
    const new_arr = arr.join("").split("").filter((e) => {
        return e == k;
    })
    // console.log(new_arr);
    return new_arr.length;
}
