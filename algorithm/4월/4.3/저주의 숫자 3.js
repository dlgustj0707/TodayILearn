function solution(n) {
    let count = 0;
    let num = 1;
    let preCount = 0;

    for (; num <= n; num++) {
        (num % 3 === 0 || num.toString().includes('3')) ? count++ : "";
        console.log(num);
        console.log(count);
    }

    while (count !== 0){
        preCount += count;
        count = 0;
        for (; num <= n + preCount; num++){
            (num % 3 == 0 || num.toString().includes('3')) ? count++ : "";
            console.log(num);
            console.log(count);
        }
    }
    return num-1;
}

function solution(n) {
    for (let i = 1;i <= n; i++) {
        (i % 3 === 0 || i.toString().includes('3')) ? n++ : "";
        // console.log(i);
    }
    return n;
}
