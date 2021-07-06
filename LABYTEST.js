//______________________ VARIABLES ____________________

let START = 'S';
let END = 'G';
let wall = 'wall';
let player = "player";
let o = "empty";
let exploration = 0;
let bottom = 0;
let right = 0;
let up = 0;
let left = 0;
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
    Deplacement(Y,X)
    console.table(labyrinthe)

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


    console.table(labyrinthe)

}

//______________________ FONCTIONS ____________________

function Scan(Y,X){
    //Si la case Y n'est pas tout en bas du tableau ET que la case du BAS est VIDE et pas Exploré        on peut vérifier plus bas  ( +1 dans POSSIBLE )
    if (Y != labyrinthe.length-1 && labyrinthe[Y+1][X] == o) {
        possibility++
    }
    //Si la case X n'est pas la derniere du tableau ET que la case de DROITE est VIDE et pas Exploré     on peut vérifier à droite  ( +1 dans POSSIBLE )
    if (X != labyrinthe.length-1 && labyrinthe[Y][X+1] == o){
        possibility++
    }
    //Si la case Y n'est pas égale à 0 ET que la case du HAUT est VIDE et pas Exploré                    on peut vérifier en haut   ( +1 dans POSSIBLE )
    if (Y != 0 && labyrinthe[Y-1][X] == o){
        possibility++
    }
    //Si la case X n'est pas égale à 0 ET que la case à GAUCHE est VIDE et pas Exploré                   on peut vérifier à gauche  ( +1 dans POSSIBLE )
    if (X != 0 && labyrinthe[Y][X-1] == o){
        possibility++
    }
    // Si POSSIBLE est plus grand ou égale à 2 alors on stock les positions Y et X dans un nouveau tableau [CHECKPOINT] et on réinitialise POSSIBLE
    if (possibility >= 2){
        checkpoint.push([Y,X])
        possibility = 0
    }
}

function Deplacement(Y,X){
    //Si la case d'en BAS est VIDE -> go
    if (labyrinthe[Y+1][X] == o){
        labyrinthe[Y+1][X] = exploration++
    }
    //Sinon si la case de DROITE est VIDE -> go
    else if (labyrinthe[Y][X+1] == o){
        labyrinthe[Y][X+1] = exploration++
    }
    //Sinon si la case d'en HAUT est VIDE -> go
    else if (labyrinthe[Y-1][X] == o){
        labyrinthe[Y-1][X] = exploration++
    }
    //Sinon si la case de GAUCHE est VIDE -> go
    else if (labyrinthe[Y][X-1] == o){
        labyrinthe[Y][X-1] = exploration++
        //SINON on retourne sur les positions CHECKPOINT de Y et X afin de prendre l'autre chemin inéxploré
    } else {
        //let checkpointLength = checkpoint.length
        Y = checkpoint[checkpoint.length-1][0]
        X = checkpoint[checkpoint.length-1][1]

    }
}