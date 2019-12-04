const OPERATIONS = {
    SUM: 1,
    MULTIPLICATION: 2,
    HALT: 99,
};

const intCodeComputer = (codes) => {
    let position = 0;

    while (codes[position] !== OPERATIONS.HALT) {
        const operation = codes[position];
        const firstValuePosition = codes[position + 1];
        const secondValuePosition = codes[position + 2];
        const valueDestinationPosition = codes[position + 3];

        if (operation === OPERATIONS.SUM) {
            codes[valueDestinationPosition] = codes[firstValuePosition] + codes[secondValuePosition];
        } else if (operation === OPERATIONS.MULTIPLICATION) {
            codes[valueDestinationPosition] = codes[firstValuePosition] * codes[secondValuePosition];
        }

        position += 4;
    }

    return codes;
};

const calculateIntCodeNounAndVerbForValue = (initialCodes, testOutput) => {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            let codes = [...initialCodes];
            codes[1] = noun;
            codes[2] = verb;

            const result = intCodeComputer(codes);

            if (result[0] === testOutput) {
                return { noun, verb };
            }
        }
    }

    throw new Error(`Could not find noun and verb for "${testOutput}".`);
};

module.exports = {
    intCodeComputer,
    calculateIntCodeNounAndVerbForValue,
};
