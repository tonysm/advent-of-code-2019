const { drawCoordinates, findIntersections, closestCrossing, shortestCrossing } = require('./03-wires');
const fs = require('fs');

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

    test('finds closest crossing points using taxicab geometry', () => {
        expect(closestCrossing(
            'R75,D30,R83,U83,L12,D49,R71,U7,L72',
            'U62,R66,U55,R34,D71,R55,D58,R83'
        )).toEqual(159);

        expect(closestCrossing(
            'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
            'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
        )).toEqual(135);
    });

    xtest('finds closest crossing points from file', (done) => {
        fs.readFile(__dirname + '/inputs/taxicab-input.txt', (_err, data) => {
            const wires = data
                .toString()
                .trim()
                .split('\n');

            expect(closestCrossing(...wires)).toEqual(123);
            done();
        });
    });

    test('finds closest crossing points using shortest steps', () => {
        expect(shortestCrossing(
            'R75,D30,R83,U83,L12,D49,R71,U7,L72',
            'U62,R66,U55,R34,D71,R55,D58,R83'
        )).toEqual(610);

        expect(shortestCrossing(
            'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
            'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'
        )).toEqual(410);
    });

    xtest('finds closest crossing points from file by steps', (done) => {
        fs.readFile(__dirname + '/inputs/taxicab-input.txt', (_err, data) => {
            const wires = data
                .toString()
                .trim()
                .split('\n');

            expect(shortestCrossing(...wires)).toEqual(19242);
            done();
        });
    });
});
