function solution(nums) {
    var answer = 0;
    let numSet = new Set();

    for (let i=0; i < nums.length/2; i++){
        for (let j=0; j < nums.length; j++){
            numSet.add(nums[j]);
        }
    }

    if (numSet.size >= nums.length/2)
        return nums.length/2;
    return numSet.size;
}

// 다른 사람 풀이
function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];

    return arr.length > max ? max : arr.length
}
