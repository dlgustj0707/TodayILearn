function solution(arr)
{
    var answer = [];

    value = arr[0];
    for (let i=1; i< arr.length; i++) {
        if (value !== arr[i]) // 뒤에 것이 앞에 것과 다른 요소임
            answer.push(value);
            value = arr[i];
    }
    answer.push(value);

    return answer;
}