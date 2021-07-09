//-------------------------- FACTORIELLE --------------------------
function factorielle(nombre){
    if (nombre == 0){
        return 1;
    }
    nombre = nombre*factorielle(nombre-1)
    return nombre;
}
console.log(factorielle(5));