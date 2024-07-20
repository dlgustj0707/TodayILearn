function solution(bridge_length, weight, truck_weights) {
    let bridge_cross = new Array(bridge_length).fill(0); // 몇초가 걸리는지에 따라서 array에 0을 채워준다 ex) 2초이면 [0,0]
    let t=0;
    for (let i=0; i<truck_weights.length ;t++){
        // 다리를 건너고 있는 트럭 중 맨 앞에 있는 트럭을 제외한 나머지의 트럭의 무게 합을 구해준다.
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