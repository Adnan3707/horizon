export  default function overlapJoinwithExclude(arr: [number, number][], rem: [number, number][]): [number, number][] {
    if(arr.length < 1 ) return arr;

    arr.sort((a, b) => a[0] - b[0]);
// Join arrays 
    for(let i=0;i<arr.length-1;i++){
        if(arr[i][1]>arr[i+1][0] && arr[i][1]<arr[i+1][1]){
            arr[i] =  [arr[i][0],arr[i+1][1]]
            arr.splice(i+1,1);
        }
     }
     if(rem.length<1) return arr;

  

    rem.sort((a, b) => a[0] - b[0]);

   
    let result: [number, number][] = [];  
    let remIndex = 0;
 // exclude arrays
    for (const interval of arr) {
        let start = interval[0];
        let end = interval[1];

        
        while (remIndex < rem.length && rem[remIndex][1] <= start) {
            remIndex++;
        }

       
        while (remIndex < rem.length && rem[remIndex][0] < end) {
            if (rem[remIndex][0] > start) {
                result.push([start, --rem[remIndex][0]]);
            }
            start = Math.max(start, rem[remIndex][1]+1);
            if (rem[remIndex][1] >= end) {
                break;
            }
            remIndex++;
        }

       
        if (start < end) {
            result.push([start, end]);
        }
    }

    return result;
}
