function solution(babbling){
    var answer = 0;
    babbling.forEach(element => {
        const arr = ["aya", "ye", "woo","ma"];
        for (const item of arr){
            if (element.includes(item)){
                element = element.replace(item,'.');
                console.log(element);
            }
        }

        element = element.split('.').join(''); 
        console.log(element);

        if (element ==''){
            answer++;
            console.log(answer);
        }
    });
    return answer;
}
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);