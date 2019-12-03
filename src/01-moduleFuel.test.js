const { calculateFuel, deepFuel } = require('./01-moduleFuel');
const fs = require('fs');

describe('FuelCalculator', () => {
    test('calculates required fuel of modules', () => {
        expect(calculateFuel(12)).toBe(2);
        expect(calculateFuel(14)).toBe(2);
        expect(calculateFuel(1969)).toBe(654);
        expect(calculateFuel(100756)).toBe(33583);
        expect(calculateFuel(125860)).toBe(41951);
    });

    test('calculates from file inputs', (done) => {
        fs.readFile(__dirname + '/inputs/fuel-input.txt', (_err, data) => {
            const sumOfRequireFuel = data.toString()
                .trim().split('\n')
                .reduce((acc, mass) => acc + calculateFuel(parseInt(mass)), 0);

            expect(sumOfRequireFuel).toBe(3427947);
            done();
        });
    });

    test('deep fuel calculation', () => {
        expect(deepFuel(0)).toBe(0);
        expect(deepFuel(14)).toBe(2);
        expect(deepFuel(1969)).toBe(966);
        expect(deepFuel(100756)).toBe(50346);
    });

    test('deep fuel from file input', (done) => {
        fs.readFile(__dirname + '/inputs/fuel-input.txt', (_err, data) => {
            const sumOfRequireFuel = data.toString()
                .trim().split('\n')
                .reduce((acc, mass) => acc + deepFuel(parseInt(mass)), 0);

            expect(sumOfRequireFuel).toBe(5139037);
            done();
        });
    });
});
