const input = [ { a: 1 }, { b: 2 }, { c: 3 } ]
console.log('input-->',input)
let secans={}
input.map((e)=>secans[Object.keys(e)]=e[Object.keys(e)])
console.log('output-->',secans)