class Camera {
    takePhoto() {
        console.log("Photo taken!");
    }
}

class GPS {
    locate() {
        console.log("Location Found");
    }
}

class Battery {
    charge() {
        console.log("Charging...");
    }
}

class SmartPhone {
    // FIX 1: Renamed from 'calculator' to 'constructor'
    constructor(brand, name) {
        this.brand = brand;
        this.name = name;
        // This is called "Composition" - The phone is composed of other objects
        this.camera = new Camera();
        this.battery = new Battery();
        this.gps = new GPS();
    }
}

// FIX 3: Removed the extra 3rd argument ("Iphone") as your constructor only takes 2
const s1 = new SmartPhone("Realme", "Narzo");

// FIX 2: Fixed the syntax from $(...) to ${...}
console.log(`${s1.name} from ${s1.brand} can do all these operations:`);

s1.camera.takePhoto();
s1.battery.charge();
s1.gps.locate();