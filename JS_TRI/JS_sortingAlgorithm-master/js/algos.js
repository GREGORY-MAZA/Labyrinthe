// Converts from degrees to radians.
Number.prototype.toRadians = function () {
    return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
    var GrenobleLat = 45.166667;
    var GrenobleLong = 5.716667;

    //------------------------------------ Calculate distance -----------------------------------------------
    const R = 6371e3; // metres
    const φ1 = GrenobleLat * Math.PI / 180; // φ, λ in radians
    const φ2 = city.latitude * Math.PI / 180;
    const Δφ = (city.latitude - GrenobleLat) * Math.PI / 180;
    const Δλ = (city.longitude - GrenobleLong) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = (R * c) / 1000; // in km

    return d;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {
    displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
    let swap = csvData[i];
    csvData[i] = csvData[j];
    csvData[j] = swap;
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j) {

let verif = false;
if(csvData[i].dist < csvData[j].dist){
    verif=true;
}
    return verif
    displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
    console.log("isLess - implement me !");
}

//----------------------------------------TRI PAR INSERTION -------------------------------------------------

function insertsort() {
    let n = csvData.length;

    for (let index=1; index< n; index++) {
        let temp = csvData[index].dist;
        let minimum = index;

        while (minimum > 0 && csvData[minimum - 1].dist > temp) {
            swap(minimum-1,minimum);
            minimum = minimum - 1;
        }

    }
    console.log("Tri pas insertion terminé");
}

//----------------------------------------TRI PAR SLECTION -------------------------------------------------

function selectionsort() {
    let n = csvData.length;

    for (let index = 0; index < n; index++) {
        let minimum = index;
        for (let maximum = index + 1; maximum < n; maximum++) {
            if (isLess(maximum,minimum) == true) {
                minimum = maximum;
            }
        }
        swap(index,minimum);
    }
    console.log("Tri pas séléction terminé");
}
//----------------------------------------TRI A BULLES ---------------------------------------------------

function bubblesort() {
    let n = csvData.length;
    let permut = true;
    while (permut === true) {
        permut = false;

        for (let i = 0; i < n - 1; i++) {
            if (csvData[i].dist > csvData[i + 1].dist) {
                swap(i, i + 1)
                permut = true;
            }
        }
        console.log("Tri à bulles séléction terminé");
    }
}

function shellsort() {
    console.log("shellsort - implement me !");
}

function mergesort() {
    console.log("mergesort - implement me !");
}

function heapsort() {
    console.log("heapsort - implement me !");
}

function quicksort() {
    console.log("quicksort - implement me !");
}

function quick3sort() {
    console.log("quick3sort - implement me !");
}



function sort(algo) {
    switch (algo) {
        case 'insert':
            insertsort();
            break;
        case 'select':
            selectionsort();
            break;
        case 'bubble':
            bubblesort();
            break;
        case 'shell':
            shellsort();
            break;
        case 'merge':
            mergesort();
            break;
        case 'heap':
            heapsort();
            break;
        case 'quick':
            quicksort();
            break;
        case 'quick3':
            quick3sort();
            break;
        default:
            throw 'Invalid algorithm ' + algo;
    }
}
