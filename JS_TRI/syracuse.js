function syracuse(n) {
    if  (n === 1){
        console.log(n)
        return n
    }
    else if (n % 2 === 0){
        console.log(n)
        return syracuse(n/2)
    } else{
        console.log(n)
        return syracuse(n*3+1 )
    }
}
console.log(syracuse(10));