const checkEquals = require('./checkEquals');

test('if the function is defined', () => {
    expect(checkEquals).toBeDefined();
});

test('check if both arrays are equals', () => {
    expect(checkEquals([1, 2], [1, 3])).toBe(false);
    expect(checkEquals([1, 2], [1, 2])).toBe(true);
    expect(checkEquals([1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7], [11, 12, 13, 14, 15, 16, 17])).toBe(false);
});