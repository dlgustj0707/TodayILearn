const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 1; i <= parseInt(input[0]); i++){
        for (let j = 0; j < i; j++){
            output.push('*');
        }
        output.push('\n'); 
    }
    // output = [ '*', '\n', '*', '*', '\n', '*', '*', '*', '\n' ]

    const answer = output.join("").split("\n");
    // answer = [ '*', '**', '***', '' ]
    answer.forEach((e) => {
        console.log(e);
    })
});

//
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}