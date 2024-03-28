function solution(balls, share) {
    // ex) balls = 5, share = 3
    let top = 1;
    let bottom = 1;
    // top
    for (let i=balls; i > share; i--){ // 5 * 4   // 5!/3! = 5*4
        top *= i;
    } 
    //bottom
    for (let i=balls-share; i > 1; i--){
        bottom *= i;
    }
    return Math.floor(top/bottom);
}