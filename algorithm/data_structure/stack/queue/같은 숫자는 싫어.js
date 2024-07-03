function solution(arr)
{
    var answer = [];

    value = arr[0];
    for (let i=1; i< arr.length; i++) {
        if (value !== arr[i])
            answer.push(value);
            value = arr[i];
    }
    answer.push(value);

    return answer;
}