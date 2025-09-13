//Reverse Vowels in a string
function reverseVowel(str){
    reversedVowel=str.match(/[aeiou]/gi)?.reverse() ||[] 
    return str.replace(/[aeiou]/gi,()=>reversedVowel.shift())
}
