function solution(priorities, location) {
    var answer = 0;
    let sort_arr = [...priorities].sort((a,b)=> b - a);
    let index = priorities.indexOf(sort_arr[0]);
    console.log(index);
    
    for(let i=0; ;){
        if (index+1 == priorities.length)
            index = -1;

        if(location === index){
            answer = ++i;
            break;
        }
        else {
            index = priorities.indexOf(sort_arr[++i],index+1);
            console.log(index);
        }
        
    }
    console.log(answer);
    return answer;
}

solution([1,1,9,1,1,1], 0)