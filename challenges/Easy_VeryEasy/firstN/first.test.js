const first = require('./first');

test('is function first defined', () => {
    expect(first).toBeDefined();
});

test('is it return first n element of the array', () => {
    expect(first([7, 9, 0, -2])).toBe(7);
    expect(first([], 3)).toEqual([]);
    expect(first([7, 9, 0, -2], 3)).toEqual([7, 9, 0]);
    expect(first([7, 9, 0, -2], 6)).toEqual([7, 9, 0, -2]);
    expect(first([7, 9, 0, -2], -3)).toEqual([]);
})