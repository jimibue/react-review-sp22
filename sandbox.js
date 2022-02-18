//should return an array of strings ['a','b'...'z']
const getAlphabet = ()=>{
    let alp = []
    for(let i = 97; i<=122; i++){
        alp.push(String.fromCharCode(i))
    }
    return alp

}
let x = getAlphabet()
console.log(x)

// String.fromCharCode(32) ' ' :space
// String.fromCharCode(97) 'a'
// String.fromCharCode(98) 'b'
// String.fromCharCode(122) 'z'


// 'a' => 97
// 'b' => 98
// 'z' => 122


