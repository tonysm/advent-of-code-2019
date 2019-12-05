const { drawCoordinates, findIntersections } = require('./03-wires');

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

    test('find intersections', () => {
        const firstWireCoords = [[0, 0], [0, 1], [0, 2]];
        const secondWireCoords = [[0, 0], [0, -1], [0, 0], [1, 0], [0, 0], [0, 1], [0, 2]];

        expect(findIntersections(firstWireCoords, secondWireCoords)).toEqual([
            [0, 1],
            [0, 2],
        ]);
    });
});
