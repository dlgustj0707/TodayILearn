function solution(before, after) {
    const arr_before = [...before].sort();
    const arr_after = [...after].sort();
    return arr_before.toString() === arr_after.toString() ? 1: 0;
}

// 남의 풀이
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}