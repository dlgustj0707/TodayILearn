function solution(num_list) {
    let odd = 0, even = 0;
    
    num_list.forEach((e) => {
        e % 2 == 0 ? even++ : odd++;
    })
    return [even, odd]; 
}