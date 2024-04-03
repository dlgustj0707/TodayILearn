function solution(array, n) {
    // ex) [15,25,26]
    var answer = 0;
    const gap_arr = array.map((e) => {  // [-5,5,6]
        return e-n;
    })
    let less_gap = gap_arr[0];

    for (let i=1; i < gap_arr.length;i++){
        if (Math.abs(less_gap) > Math.abs(gap_arr[i])){
            less_gap = gap_arr[i];
        } 
        else if (Math.abs(less_gap) === Math.abs(gap_arr[i])){
            if (less_gap > gap_arr[i]){
                less_gap = gap_arr[i];
            }
        }
    }
    return less_gap + n;
}


