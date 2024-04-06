function solution(polynomial) {
    let num_count = 0
    let x_num_arr = [];

    let arr = polynomial.split(" + ");
    
    arr.map((e) => {
        (!e.includes('x')) ?  num_count += Number(e)
        : (e.length === 1) ? x_num_arr.push(1) : x_num_arr.push(Number(e.replace('x', '')));
    })

    // x 계수 count 하기
    let x_count = 0;
    x_num_arr.map((e) => {
        x_count += e;
    })

    if (x_count === 0) {
        return `${num_count}`;
    } 
    else if (num_count === 0) {
        if (x_count === 1){
            return `x`;
        }
        return `${x_count}x`;
    }
    else if (x_count === 1){
        return `x + ${num_count}`;
    } 
    return `${x_count}x + ${num_count}`;
    
}
