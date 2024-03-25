function solution(s) {
    const arr = s.split(" ");
    let before_value;
    let sum = 0;
    arr.map((e) => {
        e === 'Z' ? sum -= before_value : sum += Number(e);
        before_value = Number(e);
    })
    return sum;
}