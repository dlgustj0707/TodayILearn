function solution(bridge_length, weight, truck_weights) {
    let bridge_cross = new Array(bridge_length).fill(0);
    let t=0;
    for (let i=0; i<truck_weights.length ;t++){
        let sum = bridge_cross.reduce((acc,cur)=>{
            return acc + cur;
        }, 0)-bridge_cross[0];

        bridge_cross.shift();
        if (sum+truck_weights[i] <= weight){
            bridge_cross.push(truck_weights[i++]);
        }
        else {
            bridge_cross.push(0);
        }
    }
    return t+bridge_length;
}