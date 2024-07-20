function solution(genres, plays) {
    var answer = [];
    let genresSum = [];
    let genresSet = [...new Set(genres)];
    let genresObj = {};

    for (let i=0; i<genresSet.length; i++){
        sum = 0;
        for (let j=0; j<genres.length; j++){
            if (genresSet[i] == genres[j] )
                sum += plays[j];
        }
        genresSum.push([genresSet[i], sum]);
    }

    // 합계 내림차순으로 정렬
    genresSum.sort((a,b) => b[1]-a[1]);
    for (let i=0; i<genresSum.length; i++){
        if (!genresObj.hasOwnProperty(genresSum[i][0]))
            genresObj[genresSum[i][0]] = [];
        for (let j=0; j<genres.length; j++){
            if (genresSum[i][0] == genres[j])
                genresObj[genresSum[i][0]].push([j, plays[j]]);
        }
        genresObj[genresSum[i][0]].sort((a, b) => b[1]-a[1]);
    }

    for (let value of Object.values(genresObj)){
        answer.push(value[0][0]);
        if (value.length > 1)
            answer.push(value[1][0]);
    }
    return answer;
}
