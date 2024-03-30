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
        console.log(answer);
        for (let i = 0; i < answer.length; i++){
            if (Math.abs(answer[i]) > Math.floor(board[i]/2)){
                (answer[i] < Math.floor(board[i]/2)) ? answer[i] = -Math.floor(board[i]/2) : answer[i] = Math.floor(board[i]/2);
            }
        }
    })

    return answer;
}
solution(["right", "right", "right", "right", "right", "left"],[9, 5]);