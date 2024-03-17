function solution(n) {
    const root = Math.sqrt(n);
    return root === parseInt(root) ? 1 : 2;
}

//Number.isInteger()
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}