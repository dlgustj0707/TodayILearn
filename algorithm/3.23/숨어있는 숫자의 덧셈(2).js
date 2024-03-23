function solution(my_string) {
    /* 
    ex) a1B2c34o -> ['a', '1','B', '2', 'c','3', '4', 'o']
    -> [' ', '1',' ', '2', ' ','3', '4', ' '] -> " 1 2 34 "
    -> ['', '1', '', '2', '34','']
    */
    const num = my_string.split('').map((e) => {
        return Number(e) == e ? e : " ";
    }).join("").split(" "); 
    
    let answer = 0;

    num.map((e) => {
        return e !== "" ? answer += Number(e) : "";
    })
    return answer;
}