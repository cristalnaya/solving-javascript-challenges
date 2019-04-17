const isAvgWhole = require('./isAvgWhole');

test('is function isAvgWhole defined', () => {
    expect(isAvgWhole).toBeDefined();
});

test('is average of the input array a whole number', () => {
    expect(isAvgWhole([1, 3])).toBe(true);
    expect(isAvgWhole([1, 2, 3, 4])).toBe(false);
})