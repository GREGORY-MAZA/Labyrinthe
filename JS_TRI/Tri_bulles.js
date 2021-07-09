let T = [3,9,7,1,6,2,8,4,5];
let n = T.length;
let passage = 0;
let permut = true;
let compare = 0;
let countSwap = 0;

while (permut == true){
    permut = false;
    for (let i=0 ; i<n-1;i++){
        compare = compare +1

        if (T[i] > T[i+1]){
            let swap = T[i];
            T[i] = T[i+1];
            T[i+1] = swap;
            permut = true
            countSwap = countSwap +1

        }
    }

    passage = passage +1

}
console.log(T)
console.log(passage + " Tours")
console.log(countSwap + " Changements swap");
console.log(compare + " Comparaisons");