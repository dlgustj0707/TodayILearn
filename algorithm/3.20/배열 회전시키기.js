function solution(numbers, direction) {
    var value;
    if (direction === "left"){
        value = numbers.shift(); // 맨 앞에 것을 빼고 뒤로 옮긴다.
        numbers.push(value);
    }else if (direction === "right"){
        value = numbers.pop(); // 맨 뒤에 것을 앞으로 옮긴다.
        numbers.unshift(value);
    }
    return numbers;
}