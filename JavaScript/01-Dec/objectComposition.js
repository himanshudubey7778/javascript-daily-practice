class Engine {
    start() {
        console.log("Engine Started!");
    }
}

class Car {
    constructor() {
        this.engine = new Engine(); // Composition: Car HAS AN Engine
    }

    // --- FIX: Method class ke andar hona chahiye ---
    startCar() {
        this.engine.start(); 
        console.log("Car is moving now...");
    }
}

// Test karne ke liye:
let myCar = new Car();
myCar.startCar();