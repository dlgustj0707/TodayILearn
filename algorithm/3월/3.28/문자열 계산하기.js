function solution(my_string) {
    const arr = my_string.split(" ");
    let answer = Number(arr[0]);

    for (let i = 1; i < arr.length-1; i+=2){
        (arr[i] == "+") ? answer = answer + Number(arr[i+1]): answer = answer - Number(arr[i+1]);
    }
    return answer;
}