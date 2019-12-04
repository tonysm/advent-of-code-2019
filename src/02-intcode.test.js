const { intCodeComputer } = require('./02-intcode');

describe('IntCode', () => {
    test('computes intcode', () => {
        expect(intCodeComputer([1,0,0,0,99])).toEqual([2,0,0,0,99]);
        expect(intCodeComputer([2,3,0,3,99])).toEqual([2,3,0,6,99]);
        expect(intCodeComputer([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
        expect(intCodeComputer([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
    });
});
