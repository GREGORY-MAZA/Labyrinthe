//______________________ VARIABLES ____________________

let START = 'START';
let END = 'GOAL';
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


//______________________ LABYRINTHE ____________________

labyrinthe = [
    //       0         1        2         3         4         5         6
        [  START,    wall,      o,        o,        o,        o,        o    ],     // #0
        [    o,      wall,      o,       wall,     wall,      o,       wall  ],     // #1
        [    o,      wall,      o,       wall,     END,       o,        o    ],     // #2
        [    o,       o,        o,        o,       wall,     wall,      o    ],     // #3
        [    o,      wall,      o,       wall,      o,        o,        o    ],     // #4
        [    o,      wall,      o,        o,        o,       wall,      o    ]      // #5
]


while (labyrinthe[Y][X] != END){


        ScanCase(Y,X)

        DirectionCase(Y,X)
        console.table(labyrinthe)

}



//______________________ FONCTIONS ____________________

function PlayerEnterCase(positionY,positionX){
        if(labyrinthe[positionY][positionX] == player) {
                labyrinthe[positionY][positionX] = o
        } else {
                exploration ++
                labyrinthe[positionY][positionX] = exploration
        }

}

function ScanCase (positionY,positionX){
        bottom = 0
        right = 0
        up = 0
        left = 0

        if (labyrinthe[positionY+1][positionX] == o){
                bottom = 1
                exploration++
                //labyrinthe[positionY+1][positionX] = labyrinthe[positionY][positionX]
                Y++
        }
        if (labyrinthe[positionY][positionX+1] == o){
                right = 1
                exploration++
                X++
        }
        if (labyrinthe[positionY != 0][positionX] && labyrinthe[positionY-1][positionX] == o){
                up = 1
                exploration++
                Y--
        }
        if (labyrinthe[positionY][positionX-1] == o){
                left = 1
                exploration++
                X--
        }
        if (exploration >= 2){
                checkpoint.push(positionY,positionX)
        }

}

function DirectionCase(positionY,positionX){
        if (bottom == 1 && positionY != labyrinthe.length-1){
                labyrinthe[positionY][positionX] = exploration
        }
        else if (right == 1 && positionX !=labyrinthe.length-1){
                labyrinthe[positionY][positionX] = labyrinthe[positionY][positionX+1]
                labyrinthe[positionY][positionX] = exploration
        }
        else if (up == 1 && positionY != 0){
                labyrinthe[positionY][positionX] = labyrinthe[positionY-1][positionX]
                labyrinthe[positionY][positionX] = exploration
        }
        else if (left == 1 && positionX !=0){
                labyrinthe[positionY][positionX] = labyrinthe[positionY][positionX-1]
                labyrinthe[positionY][positionX] = exploration
        }else{
                labyrinthe[positionY][positionX] = checkpoint[positionY][positionX]
        }

}





