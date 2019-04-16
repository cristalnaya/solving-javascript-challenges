const shuffle = require('./indexShuffle');

test('indexShuffle to be defined', () => {
    expect(shuffle).toBeDefined();
});

test('Has to shuffle even and odd indexes', () => {
    expect(shuffle('abcdefg')).toBe('acegbdf');
  });

