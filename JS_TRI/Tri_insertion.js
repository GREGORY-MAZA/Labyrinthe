let T = [3,9,7,1,6,2,8,4,5];
let n = T.length;
let countSwap = 0;
let compare = 0;

for (let i=1; i< n; i++){
    let temp = T[i]; // Temp devient i
    let j = i; // j devient i

    while (j>0 && T[j-1]>temp){ // Tant que j est plus grand que 0 et que la valeur du tableau T[j-1] est plus grande que temp
        let swap = T[j]; // swap prend la valeur T[j]
        T[j] = T[j-1]; // T[j] prend la valeur de T[j-1]
        T[j-1] = swap; // T[j-1] prend la valeur de swap
        j = j-1; // j
    }

    console.log(countSwap + " Changements swap");
    console.log(T)
    //console.log(countSwap)
    //T[j] = temp

}