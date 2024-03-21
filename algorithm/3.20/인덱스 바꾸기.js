function solution(my_string, num1, num2) {
    const arr = [...my_string]

    const string_num1 = arr[num1];
    const string_num2 = arr[num2];
    
    arr.splice(num1, 1, string_num2);
    arr.splice(num2, 1, string_num1);
    return arr.join("");
}

// 이렇게 교환이 된다고...?! -> 대박
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]]; //구조분해할당
    return my_string.join('');
}