const myPi = require('./myPi');

test('function myPi to be defined', () => {
    expect(myPi).toBeDefined();
});

test('Check PI to n decimal places', () => {
    expect(myPi(5)).toEqual(3.14159);
    expect(myPi(1)).toEqual(3.1);
})