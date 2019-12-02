const calculateFuel = require('./01-moduleFuel');

describe('FuelCalculator', () => {
    test('calculates required fuel of modules', () => {
        expect(calculateFuel(12)).toBe(2);
        expect(calculateFuel(14)).toBe(2);
        expect(calculateFuel(1969)).toBe(654);
        expect(calculateFuel(100756)).toBe(33583);
    });
});
