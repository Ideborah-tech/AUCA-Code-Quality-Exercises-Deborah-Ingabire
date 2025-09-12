function isPrime(num){
    if(num<=1 || typeof num !== 'number' || !Number.isInteger(num)) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0) return false;
    }
    return true;
}
console.log(isPrime(11))