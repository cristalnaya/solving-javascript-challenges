const capToFront = require('./capToFront');

test('is it capital letters first', () => {
    expect(capToFront('hApPy')).toBe('APhpy');
});