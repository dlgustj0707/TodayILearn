function solution(n, numlist) {
    const answer = numlist.filter((e)=>{
        return e/n === Math.floor(e/n); 
    });
    return answer;
}
//
function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}