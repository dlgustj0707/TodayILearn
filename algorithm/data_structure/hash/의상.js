function solution(clothes) {
    var answer = 1;
    let obj = {}; // 옷 종류를 담는 객체
    
    for(let i=0; i<clothes.length; i++){
        // key값이 존재하면
        (obj.hasOwnProperty(clothes[i][1])) 
        ? obj[clothes[i][1]]++ : obj[clothes[i][1]] = 1;
    }

    let arr = Object.keys(obj);
    for (let i=0; i<arr.length; i++){
        answer *= (obj[arr[i]] + 1);
    }

    return answer-1;
}

// 다른 사람 풀이
function solution(clothes) {
    const types = {};
    for(const [style, type] of clothes){
        if(type in types) types[type] +=1;
        else types[type] = 1;
    }
    let sum = 1;
    for(const type in types) sum *= (types[type] + 1)
    return sum -1;
}