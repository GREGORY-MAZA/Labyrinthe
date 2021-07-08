//______________________ VARIABLES ____________________

let START = 'S';
let END = 'G';
let wall = 'wall';
let o = "empty";
let exploration = 0;
let checkpoint = [];
let Y = 0;
let X = 0;
let possibility = 0

//______________________ LABYRINTHE ____________________

labyrinthe = [
    //                [ Y ] = VERTICALE    [ X ] = HORIZONTALE
    //       0         1        2         3         4         5         6
    [  START,    wall,      o,        o,        o,        o,        o    ],     // #0
    [    o,      wall,      o,       wall,     wall,      o,       wall  ],     // #1
    [    o,      wall,      o,       wall,     END,       o,        o    ],     // #2
    [    o,       o,        o,        o,       wall,     wall,      o    ],     // #3
    [    o,      wall,      o,       wall,      o,        o,        o    ],     // #4
    [    o,      wall,      o,        o,        o,       wall,      o    ]      // #5
]

while (labyrinthe[Y][X] != END){
    Scan(Y,X)
    exploration +=1
    //Si la case SUD est VIDE -> go
    if (Y != labyrinthe.length-1 && labyrinthe[Y+1][X] == o){
        Y = Y +1
        labyrinthe[Y][X] = exploration

    }
    //Sinon si la case EST est VIDE -> go
    else if (X != labyrinthe.length && labyrinthe[Y][X+1] == o){
        X = X +1
        labyrinthe[Y][X] = exploration

    }
    //Sinon si la case NORD est VIDE -> go
    else if (Y != 0 && labyrinthe[Y-1][X] == o){
        Y = Y -1
        labyrinthe[Y][X] = exploration

    }
    //Sinon si la case de OUEST est VIDE -> go
    else if (X != 0 && (labyrinthe[Y][X-1] == o || labyrinthe[Y][X-1] == END)) {
        X = X - 1
        if (labyrinthe[Y][X] == END){
           // console.log("YOU WIN !")
        }else{
        labyrinthe[Y][X] = exploration
        }

        //SINON on retourne sur les positions CHECKPOINT de Y et X afin de prendre l'autre chemin inéxploré
    } else {
        //let checkpointLength = checkpoint.length
        Y = checkpoint[checkpoint.length-1][0]
        X = checkpoint[checkpoint.length-1][1]
        labyrinthe[Y][X] = exploration
        checkpoint.pop

    }
    console.table(labyrinthe)
    console.log(Y,X)
}

console.log('     ! ! ! ! ! ! ! ! ! ! ! ! CONGRATULATION ! ! ! ! ! ! ! ! ! ! ! ! ! !')
console.log('             ! ! ! ! ! ! EXIT ON Y = ' + Y + ' AND X = '+ X + ' ! ! ! ! ! !')
console.log('             -------- You found with ' + exploration + ' tries -------' )
labyrinthe[Y][X] = 'WIN'
console.table(labyrinthe)

//console.log(labyrinthe[Y])
//console.log(labyrinthe[Y+1])
//for (let i = 0; i < labyrinthe.length; i++) {
    console.log(labyrinthe[0][0] +' '+ labyrinthe[0][1] +' '+ labyrinthe[0][2] +' '+ labyrinthe[0][3] +' '+ labyrinthe[0][4] +' '+ labyrinthe[0][5])
    console.log(labyrinthe[1][0] +' '+ labyrinthe[1][1] +' '+ labyrinthe[1][2] +' '+ labyrinthe[1][3] +' '+ labyrinthe[1][4] +' '+ labyrinthe[1][5])
    console.log(labyrinthe[2][0] +' '+ labyrinthe[2][1] +' '+ labyrinthe[2][2] +' '+ labyrinthe[2][3] +' '+ labyrinthe[2][4] +' '+ labyrinthe[2][5])
    console.log(labyrinthe[3][0] +' '+ labyrinthe[3][1] +' '+ labyrinthe[3][2] +' '+ labyrinthe[3][3] +' '+ labyrinthe[3][4] +' '+ labyrinthe[3][5])
    console.log(labyrinthe[4][0] +' '+ labyrinthe[4][1] +' '+ labyrinthe[4][2] +' '+ labyrinthe[4][3] +' '+ labyrinthe[4][4] +' '+ labyrinthe[4][5])
    console.log(labyrinthe[5][0] +' '+ labyrinthe[5][1] +' '+ labyrinthe[5][2] +' '+ labyrinthe[5][3] +' '+ labyrinthe[5][4] +' '+ labyrinthe[5][5])





//}

//______________________ FONCTIONS ____________________

function Scan(Y,X){

    //Si la case Y n'est pas tout en bas du tableau ET que la case du SUD est VIDE et pas Exploré        on peut vérifier plus bas  ( +1 dans POSSIBLE )
    if (Y != labyrinthe.length-1 && labyrinthe[Y+1][X] == o) {
        possibility++
    }
    //Si la case X n'est pas la derniere du tableau ET que la case EST est VIDE et pas Exploré     on peut vérifier à droite  ( +1 dans POSSIBLE )
    if (X != labyrinthe.length-1 && labyrinthe[Y][X+1] == o){
        possibility++
    }
    //Si la case Y n'est pas égale à 0 ET que la case du NORD est VIDE et pas Exploré                    on peut vérifier en haut   ( +1 dans POSSIBLE )
    if (Y != 0 && labyrinthe[Y-1][X] == o){
        possibility++
    }
    //Si la case X n'est pas égale à 0 ET que la case OUEST est VIDE et pas Exploré                   on peut vérifier à gauche  ( +1 dans POSSIBLE )
    if (X != 0 && (labyrinthe[Y][X-1] == o || labyrinthe[Y][X-1] == END)){
        possibility++
    }
    // Si POSSIBLE est plus grand ou égale à 2 alors on stock les positions Y et X dans un nouveau tableau [CHECKPOINT] et on réinitialise POSSIBLE
    if (possibility >= 2){
        checkpoint.push([Y,X])

    }
    possibility = 0
}

/*function Deplacement(Y,X){
    //Si la case SUD est VIDE -> go
    if (Y != labyrinthe.length-1 && labyrinthe[Y+1][X] == o){
        Y = Y +1
        labyrinthe[Y][X] = exploration +1
        return Y
    }
    //Sinon si la case EST est VIDE -> go
    else if (X != labyrinthe.length-1 && labyrinthe[Y][X+1] == o){
        X = X +1
        labyrinthe[Y][X] = exploration +1
        return X
    }
    //Sinon si la case NORD est VIDE -> go
    else if (Y != 0 && labyrinthe[Y-1][X] == o){
        Y = Y -1
        labyrinthe[Y][X] = exploration +1
        return Y
    }
    //Sinon si la case de OUEST est VIDE -> go
    else if (X != 0 && labyrinthe[Y][X-1] == o){
        X = X - 1
        labyrinthe[Y][X] = exploration +1
        return X
        //SINON on retourne sur les positions CHECKPOINT de Y et X afin de prendre l'autre chemin inéxploré
    } else {
        //let checkpointLength = checkpoint.length
        Y = checkpoint[checkpoint.length-1][0]
        X = checkpoint[checkpoint.length-1][1]
        exploration -= 1

    }
}*/

// ----------------------------------------------  BROUILLON ---------------------------------------------------

//1ere étape - Fonction Scan pour savoir quelle case nous entoure
//                      Si la case Y n'est pas tout en bas du tableau ET que la case du BAS est VIDE et pas Exploré        on peut vérifier plus bas  ( +1 dans POSSIBLE )
//                      Si la case X n'est pas la derniere du tableau ET que la case de DROITE est VIDE et pas Exploré     on peut vérifier à droite  ( +1 dans POSSIBLE )
//                      Si la case Y n'est pas égale à 0 ET que la case du HAUT est VIDE et pas Exploré                    on peut vérifier en haut   ( +1 dans POSSIBLE )
//                      Si la case X n'est pas égale à 0 ET que la case à GAUCHE est VIDE et pas Exploré                   on peut vérifier à gauche  ( +1 dans POSSIBLE )
//
// Si POSSIBLE est plus grand ou égale à 2 alors on stock les positions Y et X dans un nouveau tableau [CHECKPOINT] et on réinitialise POSSIBLE

//2eme étape - Fonction Déplacement de case
//
//                      Si la case d'en BAS est VIDE -> go
//                Sinon si la case de DROITE est VIDE -> go
//                Sinon si la case d'en HAUT est VIDE -> go
//                Sinon si la case de GAUCHE est VIDE -> go
//                          Marquer la case avec la nouvelle valeur de exploration
//                  SINON on retourne sur les positions CHECKPOINT de Y et X afin de prendre l'autre chemin inéxploré