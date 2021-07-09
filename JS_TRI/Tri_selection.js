//----------------------------------- DECLARATION VARIABLES ------------------------------------------------

let T = [3,9,7,1,6,2,8,4,5]; // Tableau T[] qui comporte 9 éléments de T[0] à T[8]
let n = T.length; // n est égal à l'entierté du Tableau T
let compare = 0; //variable pour compter les comparaisons
let countSwap = 0; //variable pour compter les Swap

//----------------------------------- BOUCLE DE COMPARAISON ------------------------------------------------


    for (let i = 0; i < n; i++) { //Boucle afin de comparer les éléments du tableau ! 1er élément de la comparaison. Pour i égale 0 (déclaration d'un index qui à pour valeur 0   ([0] étant la 1ere case du Tableau T) .)
        let min = i; // La variable min contient la valeur de de i ( i étant l'index, soit la valeur de la case )



        for (let j = i + 1; j < n; j++) { //Boucle afin de comparer les éléments du tableau ! 2eme élément de la comparaison. Pour j égale i +1 (déclaration d'un 2eme index qui à pour valeur l'index i + 1  ( il sert à cibler la case à coté de l'index i.)

            if (T[j] < T[min]) { // Si la case du tableau T[j] est plus petit que la case T[min]
                min = j; // on donne à min la valeur de j
            }
            compare = compare +2; // Compteur de comparaison
        }
            compare = compare +1; // Compteur de comparaison

        //----------------------------------- SWAP ------------------------------------------------
        let swap = T[i]; // déclaration de swap qui à pour valeur la case T[i] du moment
        T[i] = T[min]; //on donne à T[i] la valeur de T[min]
        T[min] = swap; //on donne à T[min] la valeur de swap qui à pour valeur T[i]
        countSwap = countSwap +1; // Compteur de SWAP
    }

    //----------------------------------- DISPLAY ------------------------------------------------

    console.log(T)
    console.log(compare + " Comparaisons");
    console.log(countSwap + " Changements swap");

    /* ----------------- OTHER SWAP --------------------------
        T[min] = [T[i], T[i] = T[min]][0];
 */

