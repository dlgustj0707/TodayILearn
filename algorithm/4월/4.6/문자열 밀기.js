function solution(A, B) {
    let arr = [...A];
    let index = 0;
    for (; index < arr.length; index++) {
        if (arr.join('') === B) {
            break;
        }
        else {
            const last_element = arr.pop();
            arr.unshift(last_element);
        }
    }

    if (index === arr.length){
        return -1;
    }
    return index;
}