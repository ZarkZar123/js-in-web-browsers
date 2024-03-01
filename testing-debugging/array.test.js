const {copyArray} = require( './array')


const items= ['bag','pen','shoe']


test('create a copy of the array',()=>{
    expect(copyArray(items)).toEqual(items)
    expect(copyArray(items)).not.toBe(items)
})