const hashPlusCount = require('./hashPlusCount');

test("maxChar function to be defined", () => {
    expect(hashPlusCount).toBeDefined();
});

test("recieve sum of # and +", () => {
    expect(hashPlusCount("")).toEqual([0, 0]);
    expect(hashPlusCount("###+")).toEqual([3, 1]);
    expect(hashPlusCount("##+++#")).toEqual([3, 3]);
    expect(hashPlusCount("#+++#+#++#")).toEqual([4, 6]);
});

test("empty string to recieve array of [0, 0]", () => {
    expect(hashPlusCount("")).toEqual([0, 0]);
   
})