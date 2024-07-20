function solution(genres, plays) {
    var answer = [];
    let genresSum = [];
    let genresSet = [...new Set(genres)];

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
    let genresArr = [];
    for (let i=0; i< genresSum.length; i++){
        let genreArr = [];
        for (let j=0; j<genres.length; j++){
            if (genresSum[i][0] == genres[j])
                genreArr.push([j, plays[j]])
        }
        genreArr.sort((a, b) => b[1]-a[1])
        genresArr.push(genreArr);
    }

    for (let i=0; i<genresArr.length; i++){
        answer.push(genresArr[i][0][0]);
        if (value.length > 1)
            answer.push(genresArr[i][1][0]);
    }
    return answer;
}
