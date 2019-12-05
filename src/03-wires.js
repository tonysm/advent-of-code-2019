const drawCoordinates = (wire) => {
    const instructions = wire.split(',');
    let positionPointer = {
        x: 0,
        y: 0,
    };

    return instructions.reduce((coords, op) => {
        const startPosition = {...positionPointer};
        const direction = op.substr(0, 1);
        const steps = parseInt(op.substr(1));

        switch (direction) {
            case 'U':
                do {
                    coords.push([startPosition.x, ++positionPointer.y]);
                } while (positionPointer.y < startPosition.y + steps);
                break;
            case 'R':
                do {
                    coords.push([++positionPointer.x, startPosition.y]);
                } while (positionPointer.x < startPosition.x + steps);
                break;
            case 'D':
                do {
                    coords.push([startPosition.x, --positionPointer.y]);
                } while (positionPointer.y > startPosition.y - steps);
                break;
            case 'L':
                do {
                    coords.push([--positionPointer.x, startPosition.y]);
                } while (positionPointer.x > startPosition.x - steps);
                break;
        }

        return coords;
    }, [[0, 0]]);
};

const findIntersections = (firstWireCoords, secondWireCoords) => {
    return firstWireCoords.reduce((intersections, [x, y]) => {
        if (!(x === 0 && y === 0)) {
            for (let i = 0; i < secondWireCoords.length; i++) {
                const [secondX, secondY] = secondWireCoords[i];
                if (x === secondX && y === secondY) {
                    intersections.push([x, y]);
                }
            }
        }

        return intersections;
    }, []);
};

const closestCrossing = (firstWire, secondWire) => {
    const intersections = findIntersections(
        drawCoordinates(firstWire),
        drawCoordinates(secondWire)
    );

    return Math.min(...intersections.map(([x, y]) => {
        return Math.abs(y) + Math.abs(x);
    }));
};

module.exports = {
    drawCoordinates,
    findIntersections,
    closestCrossing,
};
