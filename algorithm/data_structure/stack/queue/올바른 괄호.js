function solution(s){
    var answer = true;
    let front_count = 0; // (
    let back_count = 0;  // )

    for (let i=0; i<s.length; i++){
        s[i] == "(" ? front_count++ : back_count++;
        if (front_count < back_count){
            answer = false;
            break;
        }
    }
    if (front_count !== back_count)
        answer = false;
    
    return answer;
}