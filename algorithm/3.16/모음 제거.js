function solution(my_string) {
    const answer = my_string.split("").filter((e) => {
        return e !== 'a' && 
            e !== 'e' &&
            e !== 'i' && 
            e !== 'o' &&
            e !== 'u';
    });
    return answer.join("");
}