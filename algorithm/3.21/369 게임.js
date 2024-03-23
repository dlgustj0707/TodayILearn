function solution(order) {
    var answer = 0;
    // order가 숫자라서 string으로 바꿔주어야함
    const arr = String(order).split("").filter((e) => {
        // 나머지로 접근하면 0일때 확인해주어야한다!
        return Number(e) !== 0 && Number(e) % 3 === 0; 
    });
    return arr.length;
}
// 남의 풀이
function solution(order) {
    // set 중복 허용 x
    const mySet = new Set([3,6,9]); // Set(3) {3, 6, 9}
    return String(order).split('')
                        .filter(num => mySet.has(Number(num)))
                        .length;
}