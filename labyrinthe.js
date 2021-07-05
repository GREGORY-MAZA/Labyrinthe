//______________________ VARIABLES ____________________

let START = 'S';
let END = 'G';
let wall = 'wall';
let player = "player";
let emptyCase = "empty";
let exploration = 0;
let bottom = 0;
let right = 0;
let up = 0;
let left = 0;
let checkpoint = [],

//______________________ LABYRINTHE ____________________

labyrinthe = [
    //       0         1        2         3         4         5         6
        [  START,    wall,   'empty',  'empty',  'empty',  'empty',  'empty'],  // #0
        [ 'empty',   wall,   'empty',   wall,     wall,    'empty',   wall],   // #1
        [ 'empty',   wall,   'empty',   wall,     END,     'empty',  'empty'],  // #2
        [ 'empty',  'empty', 'empty',  'empty',   wall,     wall,    'empty'],  // #3
        [ 'empty',   wall,   'empty',   wall,    'empty',  'empty',  'empty'],  // #4
        [ 'empty',   wall,   'empty',  'empty',  'empty',   wall,    'empty']   // #5
]

labyrinthe[0][0]=START
PlayerEnterCase(1,0)
PlayerEnterCase(2,0)
PlayerEnterCase(3,0)


console.table(labyrinthe)



//______________________ FONCTIONS ____________________

function PlayerEnterCase(positionY,positionX){
        if(labyrinthe[positionY][positionX] === player) {
                labyrinthe[positionY][positionX] = emptyCase
        } else {
                exploration ++
                labyrinthe[positionY][positionX] = exploration
        }

}

function ScanCase (positionY,positionX){

        if (labyrinthe[positionY+1][positionX] == emptyCase){
                bottom = 1
                exploration++
        }
        if (labyrinthe[positionY][positionX+1] == emptyCase){
                right = 1
                exploration++
        }
        if (labyrinthe[positionY-1][positionX] == emptyCase){
                up = 1
                exploration++
        }
        if (labyrinthe[positionY][positionX-1] == emptyCase){
                bottom = 1
                exploration++
        }
        if (exploration >= 2){
                checkpoint.push(positionY,positionX)
        }

}

function DirectionCase(positionY,positionX){
        if (bottom == 1 && positionY != labyrinthe.length-1){
                labyrinthe[positionY+1,positionX]
        }
        else if (right == 1 && positionX !=labyrinthe.length-1){
                labyrinthe[positionY,positionX+1]
        }
        else if (up == 1 && positionY != 0){
                labyrinthe[positionY-1,positionX]
        }
        else if (left == 1 && positionX !=0){
                labyrinthe[positionY,positionX-1]
        }else{
                //revenir à la position checkpoint
        }

}




