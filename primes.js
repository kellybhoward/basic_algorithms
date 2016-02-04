// Runtime : Big O(sqrt(n))

function isPrime(n){
    if(n === 2){
        return true;
    } else if(n < 2){
        return false;
    } else{
        var limit = Math.floor(Math.sqrt(n)),
            i;
        for(i = 2 ; i <= limit ; i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;
    }
}

// Runtime : Big O(n)

function largestPrimeFactor(n){
    if(isPrime(n)){
        return n;
    } else if(n < 2){
        return false;
    } else{
        var lmt = Math.floor(Math.sqrt(n)),
            lrgPrime = 2,
            j;
        for(j = 3 ; j <= lmt ; j++){
            if(n % j === 0 && isPrime(j)){
                lrgPrime = j;
            }
        }
        return lrgPrime;
    }
}

console.log(largestPrimeFactor(600851475143));
//outputs 6857
