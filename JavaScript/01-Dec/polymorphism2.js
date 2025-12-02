// 1. Spelling sahi ki: 'Notification'
class Notification {
    send() {
        console.log("General Send Function!"); // Papa ka logic
    }
}

class Email extends Notification {
    send() {
        console.log("Sending Email!"); // Override kiya
    }
}

class SMS extends Notification {
    send() {
        console.log("Sending SMS..."); // Override kiya
    }
}

// 2. WhatsApp ne kuch override nahi kiya (Empty body)
class WhatsApp extends Notification {
    // Isne Papa ka hi method use kiya
}

// 3. Variables ke naam change kiye taaki conflict na ho
const emailObj = new Email(); // 'Email1' nahi, 'Email'
const smsObj = new SMS();     // Variable ka naam alag rakha
const whatsAppObj = new WhatsApp(); // Parentheses () lagaye

// Output check karte hain
emailObj.send();    // Output: Sending Email!
smsObj.send();      // Output: Sending SMS...
whatsAppObj.send(); // Output: General Send Function!