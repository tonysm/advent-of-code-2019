const { intCodeComputer, calculateIntCodeNounAndVerbForValue } = require('./02-intcode');
const fs = require('fs');

describe('IntCode', () => {
    test('computes intcode', () => {
        expect(intCodeComputer([1,0,0,0,99])).toEqual([2,0,0,0,99]);
        expect(intCodeComputer([2,3,0,3,99])).toEqual([2,3,0,6,99]);
        expect(intCodeComputer([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
        expect(intCodeComputer([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
    });

    test('computes intcode from file', (done) => {
        fs.readFile(__dirname + '/inputs/intcodes-input.txt', (_err, data) => {
            const codes = data
                .toString()
                .trim()
                .split(',')
                .map(i => parseInt(i));

            codes[1] = 12;
            codes[2] = 2;

            expect(intCodeComputer(codes)[0]).toEqual(5434663);
            done();
        });
    });

    test('finds noun and verb', (done) => {
        fs.readFile(__dirname + '/inputs/intcodes-input.txt', (_err, data) => {
            const codes = data
                .toString()
                .trim()
                .split(',')
                .map(i => parseInt(i));

            expect(calculateIntCodeNounAndVerbForValue(codes, 19690720)).toEqual({
                noun: 45,
                verb: 59,
            });
            done();
        });
    });
});
