const twoSum = require('./twoSum');

test('Is it return array of the indexes', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
    expect(twoSum([2, 5, 5, 11], 10)).toEqual([1, 2]);
});