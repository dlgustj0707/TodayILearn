function solution(prices) {
    var answer = [];
    prices.map((value,index)=>{
        count=0;
        for (let i=index+1; i<prices.length; i++){
            count++;
            if(value > prices[i])
                break;
        }
        answer.push(count);
    })
    return answer;
}