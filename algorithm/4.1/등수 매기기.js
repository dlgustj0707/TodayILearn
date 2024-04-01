function solution(score) {
    let score_average = [];
    let answer = [];
    score.map((e) => {
        score_average.push((e[0] + e[1])/2);
    })

    const sort_average = [...score_average].sort((a,b) => b-a); // 내림차순으로 정렬한 배열

    score_average.map((e) => {
        // 
        answer.push(sort_average.indexOf(e) + 1);
    })
    return answer;
}