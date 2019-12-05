const { drawCoordinates, closestCrossing } = require('./03-wires');

describe('Touching Wires', () => {
    test('draws coordinates of a wire', () => {
        expect(drawCoordinates('U2,R2')).toEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 2],
            [2, 2]
        ]);

        expect(drawCoordinates('D3,L1')).toEqual([
            [0, 0],
            [0, -1],
            [0, -2],
            [0, -3],
            [-1, -3],
        ]);

        expect(drawCoordinates('U1,L1,D2,R3')).toEqual([
            [0, 0],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
            [2, -1],
        ]);
    });
    // test('calculates the closest crossing point of 2 wires', () => {
    //     expect(closestCrossing(
    //         'R75,D30,R83,U83,L12,D49,R71,U7,L72',
    //         'U62,R66,U55,R34,D71,R55,D58,R83'
    //     )).toBe(159);
    // });
});
