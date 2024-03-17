function solution(array) {
    // 정렬
    array.sort((a, b)=> a - b);
    return array[Math.trunc(array.length / 2)];
}