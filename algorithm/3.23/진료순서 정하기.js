function solution(emergency) {
    const original_arr = emergency; 
    console.log(original_arr);
    emergency.sort((a, b) => b - a);
    console.log(emergency);
    const answer = [];

    for(let i = 0; i < original_arr.length; i++){
        for (let j=0; j < emergency.length; j++){
            if (emergency[j] === original_arr[i]){
                answer.push(i);
                break;
            }
        }
    }
    return answer;
}