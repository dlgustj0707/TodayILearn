function solution(common) {
    var answer = 0;
    // 등비
    // [2,4,8]
    if (common[1]/common[0] === common[2]/common[1]){
        const r = common[1]/common[0];
        answer = common[0] * r ** common.length; // n번째 항 = 첫 항 * (공비)^(n-1)
        
    }
    // 등차 
    // [1,2,3,4]
    else if (common[1]-common[0] === common[2]-common[1]) {
        const d = common[1]-common[0];
        answer = common[0] + d * common.length; // n번째 항 = 첫 항 + (공차) * (n-1)
    }
    return answer;
}