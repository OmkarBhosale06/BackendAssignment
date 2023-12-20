const input = {a:1,b:2,c:3}
console.log('input-->',input)
let ans = []
let j=0
for (let key in input) {
  
  if (Object.hasOwnProperty.call(input, key)) {
    let value = input[key];
    ans[j]={[key]:value}
    j++
    
  }
}
///------
console.log('ans->',ans)
