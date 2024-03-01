const {sum} = require('./index.js')
// console.log(sum);
test('returns sum of any two numbers',()=>{
    expect(sum(1,2)).toBe(3)
})




