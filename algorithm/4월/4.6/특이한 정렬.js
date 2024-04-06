function solution(numlist, n) {
    // [1, 2, 3, 4, 5, 6], 4 
    let arr = numlist.map((e) => {
        return e-n;
    }).sort((a,b) => b-a);
    // arr: [2, 1, 0, -1, -2, -3]

    // 버블 정렬
    let tmp = 0;
    for(let i = arr.length-1; i > 0; i--){
        for (let j=0; j < i; j++){
            if (Math.abs(arr[j]) > Math.abs(arr[j+1])){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    // arr: [0, 1, -1, 2, -2, -3]
    arr = arr.map((e) => e+n);

    // arr: [4, 5, 3, 6, 2, 1]
    return arr;
}

// 남의 풀이
function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}