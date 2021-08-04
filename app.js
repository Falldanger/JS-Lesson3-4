let firstCar = {
    color: "green",
    maxSpeed: 250,
    audio: {
        brand: "Sony",
        speakers: 12
    }
};

let secondCar = {
    color: "red",
    maxSpeed: 240,
    audio: {
        brand: "B&O",
        speakers: 8
    }
};

firstCar.color = secondCar.color;

console.log(firstCar);
console.log(typeof firstCar);