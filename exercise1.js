function nestedArray(num){
if(!Array.isArray(num)) return false;
return (num.some(element=>Array.isArray(element)))? num.flat(Infinity):false;

}

console.log(nestedArray([1,2,[3,4,[5,6]]]))