// function solution(babbling) {
//     var answer = 0;
//     for (let i = 0; i < babbling.length; i++){
//         // 포함되어 있는지 확인 후 그 문자를 없앤다.
//         if (babbling[i].includes('aya')){
//             babbling[i] = babbling[i].replace('aya','*');
//             console.log(babbling[i]);
//         }
//         if (babbling[i].includes('ye')){
//             babbling[i] = babbling[i].replace('ye','*');
//             console.log(babbling[i]);
//         }
//         if (babbling[i].includes('woo')){
//             babbling[i] = babbling[i].replace('woo','*');
//             console.log(babbling[i]);
//         }
        
//         if (babbling[i].includes('ma')){
//             babbling[i] = babbling[i].replace('ma','*');
//             console.log(babbling[i]);
//         }
//         const len = babbling[i].length;
//         for (let j=0; j < len; j++){
//             if (babbling[i].includes('*')){
//                 babbling[i] = babbling[i].replace('*','');
//                 console.log(babbling[i]);
//             }
//             else{
//                 break;
//             }
//         } 

//         if(babbling[i] == '')    
//             answer += 1;
//         console.log(answer);
//     }
//     return answer;
// }

// solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);