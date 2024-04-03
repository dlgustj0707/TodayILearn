function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => a-b); // 오름차순으로 정렬
    // 1. sides 배열에 가장 긴 변이 있는 경우
    // sides[1]-sides[0] < x <= sides[1] => 개수 구하려면 sides[1]-(sides[1]-sides[0]) => sides[0]
    // 2. 나머지 한변이 가장 긴 변인 경우
    // sides[1] < x < sides[1]+sides[0] => 개수 구하려면 (sides[1]+sides[0])-sides[1]-1 => sides[0]-1

    // -> 2*sides[0]-1 ==> answer  
    answer = 2 * sides[0]-1;
    return answer;
}