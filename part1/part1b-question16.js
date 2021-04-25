let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
  
for (const carType in statistics) {
    // Captures when the value is odd or the property starts with 'r'
    if ((statistics[carType] % 2 != 0) || ("r" <= carType && "s" > carType)) {
        console.log(statistics[carType]);
    }
}