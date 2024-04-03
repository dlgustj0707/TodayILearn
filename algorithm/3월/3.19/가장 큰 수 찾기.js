function solution(array) {
    var answer = [];
    let max = array[0];
    let index = 0; 

    for (let i = 1; i < array.length; i++){
        if (max < array[i]){
            max = array[i];
            index = i;
        }
    }
    return [max, index];
}

//
function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}