const bouncer = require('./bouncer');

test('should remove falsy values from array', () => {
    expect(bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
});