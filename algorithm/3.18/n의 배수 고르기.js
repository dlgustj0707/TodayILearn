function solution(n, numlist) {
    const answer = numlist.filter((e)=>{
        return e/n === Math.floor(e/n); 
    });
    return answer;
}