function solution(id_pw, db) {
    var answer = '';
    for(let info of db) {
        if(info[0] === id_pw[0]){
            if (info[1] === id_pw[1])
                answer = 'login';
            else
                answer = 'wrong pw';
            break;
        } else {
            answer = 'fail'
        }
    }
    return answer;
}