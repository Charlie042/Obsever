# Telephone Package

The Telephone package provides a simple implementation of a telephone system in JavaScript. It allows users to add phone numbers, remove phone numbers, dial phone numbers, and observe dialing events.

## Installation

To install the Telephone package, you can use npm:


## Usage

```javascript
// Import the Telephone class and observers
const { Telephone, phoneObserver, customerObserver } = require('telephone-package');

// Create a new Telephone instance
const telephone = new Telephone();

// Adding phone numbers
telephone.AddPhoneNumber("08038743599");
telephone.AddPhoneNumber("08036788980");
telephone.AddPhoneNumber("09076576755");

// Create observers
const gingerPhone = new phoneObserver();
const ginger = new customerObserver();

// Adding observers
telephone.addObserver(gingerPhone);
telephone.addObserver(ginger);

// Dialing phone numbers
telephone.DialPhoneNumber("08036788980");
telephone.DialPhoneNumber("08038743599");
telephone.DialPhoneNumber("09076576755");

API
Telephone Class
Methods
AddPhoneNumber(num): Adds a new phone number.
RemovePhoneNumber(num): Removes a phone number.
DialPhoneNumber(num): Dials a phone number.
addObserver(observer): Adds an observer to listen for dialing events.
removeObserver(observer): Removes an observer.
notifyObservers(data): Notifies all observers when a phone number is dialed.
Observers
phoneObserver
A simple observer that logs the dialed phone number.

customerObserver
An observer that logs a custom message when a phone number is dialed.

