function solution(hp) {
    let answer = 0;
    let new_hp = 0;
    if (hp / 5 !== 0){ 
        answer += Math.floor(hp / 5); 
        new_hp = hp % 5; 
    } 
    if (new_hp / 3 !== 0){ 
        answer += Math.floor(new_hp / 3);
        new_hp = new_hp % 3;
    }
    answer += new_hp;
    return answer;
}
