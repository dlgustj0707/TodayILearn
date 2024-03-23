function solution(n) {
    const arr = Array(n).fill(1);               // [1,1,1,1,1]
    arr.map((_, index) => arr[index] += index); // [1,2,3,4,5]
    
    // const arr = Array(n).fill().map((e, index) => index + 1);

    const new_arr = arr.filter((e) => {
        for (let i = 2;i < e; i++){
            if (e % i === 0) // 1과 자기 자신이 아닌 수와 나누어 떨어지면
                return e;
        }
    })
    //console.log(new_arr);
    return new_arr.length;
}