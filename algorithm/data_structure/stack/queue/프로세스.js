function solution(priorities, location) {
    var answer = 0;
    let index = 0;
    
    for (let j=1; j<=priorities.length; index++) {  // j는 프로세스 돌아가는 순서
        max = Math.max(...priorities);
        if (index == priorities.length)  // 인덱스가 넘어갈 경우 0으로
            index = 0;
        if (priorities[index] == max) {
            if(index === location){
                answer = j;
                break;
            }
            j++;
            priorities[index] = 0;
        }
    }
    return answer;
}

// 다른 풀이
function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    //console.log(list);
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0]; 
        // var cur = list.shift();
        
        //console.log(cur);     
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}