// const abc = {
//     key1: 'x',
//     key2: 'y'
// }
// for (i in abc){
//     console.log(i);
//     console.log(i.);
// }
function solution(sides) {
    //나머지 하나가 가장 긴 변인 경우
    //sides 배열에 이미 가장 긴 변이 있는 경우

    let count = 0;
    let max = 0; //2
    sides[0] > sides[1] ? (max = sides[0]) : (max = sides[1]);
    let number1 = Array(sides[0] + sides[1])
        .fill(1)
        .map((el, index) => el + index);
    console.log(number1);
      // sides = [1,2]
    //나머지 하나가 가장 긴 변인 경우 개수
    num1 = number1.filter((el) => {
        return el > max && el < sides[0] + sides[1];
    });
    console.log(num1);

    //sides 배열에 이미 가장 긴 변이 있는 경우
    let number2 = Array(max)
        .fill(1)
        .map((el, index) => el + index);
    console.log(number2);

    num2 = number2.filter((el) => {
      return el <= max && el + sides[0] + sides[1] > 2 * max;
    });
    console.log(num2);

    let answer = number1.length + number2.length;
    return answer;
}
solution([1, 2],1);