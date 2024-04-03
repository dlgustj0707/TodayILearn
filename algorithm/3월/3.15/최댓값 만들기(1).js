function solution(numbers) {
    var answer = 0;
    const num_sort = numbers.sort((a,b) => b-a);
    return num_sort[0] * num_sort[1];
}