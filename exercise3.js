function sumArray(num){
    if (num.length===0) return 0;
    return  num[0] + sumOfElements(num.slice(1))
}
