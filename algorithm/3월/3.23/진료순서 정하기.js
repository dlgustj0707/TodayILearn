function solution(emergency) {
    const original_arr = [...emergency]; // [3, 76, 24]
    const sort_arr = emergency.sort((a, b) => b - a);  // [76, 24, 3]
    let answer = new Array(emergency.length).fill(0); // [0, 0, 0]

    /* 
    e = 3 , index = 0 
    answer[0] = sort_arr에서 3의 값을 가지는 인덱스(2) + 1
    */
    original_arr.map((e, index) => {
        answer[index] = sort_arr.indexOf(e) + 1;
    })

    return answer;
}