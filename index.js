const input = {a:1,b:2,c:3}
console.log('input-->',input)
const ans = []
for (let key in input) {
    let value = input[key];
    ans.push({ [key]: value });
}
///------
console.log('ans->',ans)
