const calculateFuel = (mass) => Math.floor(mass / 3) - 2;

const deepFuel = (mass) => {
    const fuel = calculateFuel(mass);

    if (fuel <= 0) {
        return 0;
    }

    return fuel + deepFuel(fuel);
};

module.exports = {
    calculateFuel,
    deepFuel,
};
