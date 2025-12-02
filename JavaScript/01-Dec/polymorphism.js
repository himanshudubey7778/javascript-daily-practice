class Payment {
    pay() {   // Parent Method
        console.log("Generic payment method!");
    }
}

class Paytm extends Payment {
    pay() {   // Overriding Method
        console.log("Paytm payment method!");
    }
}

class GooglePay extends Payment {
    pay() {   // Overriding Method
        console.log("Googlepay payment method!");
    }
}

// FIX: Completed the Bhim class
class Bhim extends Payment {
    pay() {
        console.log("Bhim UPI payment method!");
    }
}

const ptm1 = new Paytm();
ptm1.pay(); // Output: Paytm payment method!

const bhim1 = new Bhim();
bhim1.pay(); // Output: Bhim UPI payment method!