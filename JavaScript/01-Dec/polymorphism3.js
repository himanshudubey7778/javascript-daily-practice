class Shipping {
    calculate() {
        return 0;
    }
}

class StandardShipping extends Shipping {
    calculate() {
        return 50;
    }
}

class ExpressShipping extends Shipping {
    calculate() {
        return 150;
    }
}

// --- FIX IS HERE ---
let AnyShipping = new StandardShipping(); // I changed the variable name here to match
console.log(AnyShipping.calculate());     // Output: 50

let norShip1 = new Shipping();
console.log(norShip1.calculate());         // Output: 0

let expShip2 = new ExpressShipping();
console.log(expShip2.calculate());         // Output: 150


