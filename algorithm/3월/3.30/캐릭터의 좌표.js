function solution(keyinput, board) {
    var answer = [0,0];

    keyinput.map((e) => {
        switch(e){
            case 'left':
                answer[0] -= 1;
                break;
            case 'right':
                answer[0] += 1;
                break;
            case 'up':
                answer[1] += 1;
                break;
            case 'down':
                answer[1] -= 1;
                break;
        }
        for (let i = 0; i < answer.length; i++){
            if (Math.abs(answer[i]) > Math.floor(board[i]/2)){
                (answer[i] < Math.floor(board[i]/2)) ? answer[i] = -Math.floor(board[i]/2) : answer[i] = Math.floor(board[i]/2);
            }
        }
    })

    return answer;
}

// 남의 풀이
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}