const calculateFuel = require('./01-moduleFuel');
const fs = require('fs');

describe('FuelCalculator', () => {
    test('calculates required fuel of modules', () => {
        expect(calculateFuel(12)).toBe(2);
        expect(calculateFuel(14)).toBe(2);
        expect(calculateFuel(1969)).toBe(654);
        expect(calculateFuel(100756)).toBe(33583);
    });

    test('calculates from file inputs', (done) => {
        fs.readFile(__dirname + '/inputs/fuel-input.txt', (_err, data) => {
            const itemsMass = data.toString().split('\n');
            const requiredFuel = itemsMass.map(i => calculateFuel(i));
            let sumOfRequireFuel = 0;
            requiredFuel.forEach((s) => {
                sumOfRequireFuel += s;
            });
            expect(sumOfRequireFuel).toBe(3427945);
            done();
        });
    });
});
