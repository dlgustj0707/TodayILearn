function solution(progresses, speeds) { // [93,30,55] / [1,30,5]
    var arr = [];
    let answer = [];

    for (let i=0; i<progresses.length; i++)
        // 완료가 되는데 얼마나 걸리는지를 arr에 넣어준다.
        arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    
    max = arr[0]
    count = 1; 
    for (let i=1; i<arr.length; i++){
        // arr이 [7, 3, 9]라면 자신보다 큰 값이 나올때까지 몇개가 있는지를 구해서 answer에 push 해준다.
        if (max < arr[i]){
            answer.push(count);
            count = 1;
            max = arr[i];
        }
        else { // max >= arr[i]
            count++;
        }
    }
    answer.push(count);
    
    return answer;
}

// 줄이면
function solution(progresses, speeds) {
    var arr = progresses.map((value,index)=>{
        Math.ceil((100 - value) / speeds[index]);
    })
    let answer = [];

    max = arr[0]
    count = 1; 
    for (let i=1; i<arr.length; i++){
        // arr이 [7, 3, 9]라면 자신보다 큰 값이 나올때까지 몇개가 있는지를 구해서 answer에 push 해준다.
        if (max < arr[i]){
            answer.push(count);
            count = 1;
            max = arr[i];
        }
        else { // value >= arr[i]
            count++;
        }
    }
    answer.push(count);
    
    return answer;
}