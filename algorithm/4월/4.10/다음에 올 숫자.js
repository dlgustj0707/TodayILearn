function solution(common) {
    var answer = 0;
    if (common[1]/common[0] === common[2]/common[1]){
        const r = common[1]/common[0];
        answer = common[0] * r ** common.length;
        
    } else if (common[1]-common[0] === common[2]-common[1]) {
        const d = common[1]-common[0];
        answer = common[0] + d * common.length;
    }
    return answer;
}