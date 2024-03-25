function solution(s) { 
    const set_arr = Array.from(new Set(s)).sort();
    const sort = [...s].sort(); 
    const answer = [];

    for (let i = 0; i < set_arr.length; i++){
        let count = 0;
        for (let j = 0; j < sort.length; j++){
            if (sort[j] === set_arr[i])
                count++;
        }
        if (count === 1)
            answer.push(set_arr[i]);
    }
    return answer.join('');
}

// 남의 풀이
function solution(s) { 
    let res = [];           
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}