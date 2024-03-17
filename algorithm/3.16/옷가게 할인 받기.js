function solution(price) {
    let discountPrice;
    price >= 500000 ?  discountPrice = price * 0.8 : 
    (price >= 300000) ? discountPrice = price * 0.9 : 
    (price >=100000) ? discountPrice = price * 0.95 : discountPrice = price;
    return Math.floor(discountPrice);
}