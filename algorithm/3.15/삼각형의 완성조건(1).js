function solution(sides) {
    for(let i = 0; i < 2; i++){
        if (sides[i] > sides[i+1]){
            let temp = sides[i];
            sides[i] = sides[i+1];
            sides[i+1] = temp;
        }
    }
    if (sides[0] + sides[1] > sides[2])
        return 1;
    else
        return 2;
}

// 구조 분해 할당
function solution(sides) {
    const [long, a, b] = sides.sort((a,b) => b-a);
    return long < a + b ? 1 : 2;
}


const a = [100, 3, 20];
a.sort((a, b) => a - b);
// [3, 20, 100]