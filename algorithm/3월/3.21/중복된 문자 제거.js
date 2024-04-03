function solution(my_string) {
    // set은 중복 허용 x
    const set = new Set([...my_string]); 
    // const set = new Set(my_string); 이렇게도 가능
    return [...set].join("");
}