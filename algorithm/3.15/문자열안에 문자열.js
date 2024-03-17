function solution(str1, str2) {
    if (str1.includes(str2))
        return 1;
    return 2;
}

//split 사용
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}