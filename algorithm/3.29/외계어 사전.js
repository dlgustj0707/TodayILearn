function solution(spell, dic) {
    var answer = 0;
    let string;
    for (let i=0; i < spell.length; i++){
        for (let j=0; j < dic.length; j++){
            // 참고: 배열.splice(제거할 원소의 처음 인덱스,제거할 원소 개수)
            string = dic[j];
            !string.includes(spell[i]) ? dic.splice(j, 1, "0") : ""; // dic[j]에 spell[i]가 있는지
            console.log(dic);
        }
    }
    const new_dic_string = dic.join('').split('0').join('');
    console.log(new_dic_string);
    
    new_dic_string.length !== 0 ? answer = 1 : answer = 2;
    return answer;
}

// function s(arr){
//     const new_arr = arr.join('').split('0').join('');
//     console.log(new_arr);
// }
// s(['1','0','0','0','0','1']);

// some과 sort룰 사용한 (남의)풀이
function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}