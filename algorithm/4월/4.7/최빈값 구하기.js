function solution(array) {
    let answer;
    const obj = {};
    array.map((e) => {
        (obj[e]) ? obj[e] += 1 : obj[e] = 1;
    })

    // 최대 빈도가 몇인지 구하기
    let max_freq = obj[array[0]]; 

    for (const key in obj) {
        if (max_freq < obj[key]){
            max_freq = obj[key];
        }
    }
    // 최빈값이 2개 이상인지
    let count = 0;
    for (const key in obj) {
        if (max_freq === obj[key]){
            answer = Number(key);
            count++
        }
    }
    if (count !== 1){
        return -1;
    }
    return answer;
}

// 남의 풀이
function solution(array) {
    let m = new Map();
    // [1, 2, 3, 3, 3, 4]
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    //console.log(m); // Map(4) { 1 => 1, 2 => 1, 3 => 3, 4 => 1 }
    m = [...m].sort((a,b)=>b[1]-a[1]);
    //console.log(m); // [ [ 3, 3 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ] ]
    //console.log(m.length); // 4
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}