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
let way = 'X'

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

//--------------------------------START------------------------------------------

while (labyrinthe[Y][X] != END){
    console.log(labyrinthe[Y][X])
    console.table(labyrinthe)
    Scan(Y,X)
    exploration +=1
    //Si la case SUD est VIDE -> go
    if (Y != labyrinthe.length-1 && labyrinthe[Y+1][X] == o){
        checkpoint.push
        Y = Y +1
        labyrinthe[Y][X] = exploration
        labyrinthe[Y-1][X] = way
        //if (labyrinthe[Y+1][X] == END && labyrinthe[Y+1][X] != labyrinthe.length-1 ) {
        //    labyrinthe[Y][X] = exploration
        //    Y = Y +1
        //}
    }

    //Sinon si X n'a pas la valeur de la longeur du tableau et que la case EST est VIDE -> go
    else if (X != labyrinthe.length && labyrinthe[Y][X+1] == o){
        checkpoint.push
        X = X +1
        labyrinthe[Y][X] = exploration
        labyrinthe[Y][X-1]= way
        if (labyrinthe[Y][X+1] == END) {
            labyrinthe[Y][X] = exploration
            X = X +1
        }

    }
    //Sinon si la case NORD est VIDE -> go
    else if (Y != 0 && labyrinthe[Y-1][X] == o){
        checkpoint.push
        Y = Y -1
        labyrinthe[Y][X] = exploration
        labyrinthe[Y+1][X]=way
        if (labyrinthe[Y-1][X] == END) {
            labyrinthe[Y][X] = exploration
            Y = Y -1
        }

    }
    //Sinon si la case de OUEST est VIDE -> go
    else if (X != 0 && (labyrinthe[Y][X-1] == o)) {
        checkpoint.push
        X = X - 1
        labyrinthe[Y][X] = exploration
        labyrinthe[Y][X+1]=way
        if (labyrinthe[Y][X-1] == END) {
            labyrinthe[Y][X] = exploration
            X = X -1
        }



        //SINON on retourne sur les positions CHECKPOINT de Y et X afin de prendre l'autre chemin in??xplor??
    } else {
        //let checkpointLength = checkpoint.length
        if (Y == labyrinthe.length-1 && labyrinthe[Y-1][X] != wall){
            Y = Y-1
            labyrinthe[Y][X]=exploration
            labyrinthe[Y+1][X]=way
        }
        else if (X == labyrinthe.length-1 && labyrinthe[Y][X-1] != wall){
            X = X-1
            labyrinthe[Y][X]=exploration
            labyrinthe[Y][X-1]=way
        }
        else if (X == 0 && labyrinthe[Y][X+1] != wall){
            X = X+1
            labyrinthe[Y][X]=exploration
            labyrinthe[Y][X+1]=way
        }
        else if (Y == 0 && labyrinthe[Y+1][X] != wall){
            Y = Y+1
            labyrinthe[Y][X]=exploration
            labyrinthe[Y+1][X]=way
        }else{
            //checkpoint.pop()
            labyrinthe[Y][X] = way
            Y = checkpoint[checkpoint.length-1][0]
            X = checkpoint[checkpoint.length-1][1]
            labyrinthe[Y][X] = exploration
        }

        //Y = checkpoint[checkpoint.length-1][0]
        //X = checkpoint[checkpoint.length-1][1]
        //labyrinthe[Y][X] = exploration

        //Y = checkpoint[checkpoint.length-1][0]
        //X = checkpoint[checkpoint.length-1][1]
        //labyrinthe[Y+1][X] = exploration
        //checkpoint.pop()

    }
    console.log(Y,X)
}
exploration++
console.table(labyrinthe)
labyrinthe[Y][X] = 'WIN'
labyrinthe[Y][X+1] = way
console.table(labyrinthe)
console.log('       ! ! ! ! ! ! ! ! ! ! ! ! CONGRATULATION ! ! ! ! ! ! ! ! ! ! ! ! ! !')
console.log('           ! ! ! ! ! ! EXIT ON Y = ' + Y + ' AND X = '+ X + ' ! ! ! ! ! !')
console.log('             -------- You found with ' + exploration + ' tries -------' )

//______________________ FONCTIONS ____________________

function Scan(Y,X){

    //Si la case Y n'est pas tout en bas du tableau ET que la case du SUD est VIDE et pas Explor??        on peut v??rifier plus bas  ( +1 dans POSSIBLE )
    if (Y != labyrinthe.length-1 && labyrinthe[Y+1][X] == o) {
        possibility++
    }
    //Si la case X n'est pas la derniere du tableau ET que la case EST est VIDE et pas Explor??     on peut v??rifier ?? droite  ( +1 dans POSSIBLE )
    if (X != labyrinthe.length-1 && labyrinthe[Y][X+1] == o){
        possibility++
    }
    //Si la case Y n'est pas ??gale ?? 0 ET que la case du NORD est VIDE et pas Explor??                    on peut v??rifier en haut   ( +1 dans POSSIBLE )
    if (Y != 0 && labyrinthe[Y-1][X] == o){
        possibility++
    }
    //Si la case X n'est pas ??gale ?? 0 ET que la case OUEST est VIDE et pas Explor??                   on peut v??rifier ?? gauche  ( +1 dans POSSIBLE )
    if (X != 0 && (labyrinthe[Y][X-1] == o || labyrinthe[Y][X-1] == END)){
        possibility++
    }
    // Si POSSIBLE est plus grand ou ??gale ?? 2 alors on stock les positions Y et X dans un nouveau tableau [CHECKPOINT] et on r??initialise POSSIBLE
    if (possibility >= 2){
        checkpoint.push([Y,X])

    }
    possibility = 0
}