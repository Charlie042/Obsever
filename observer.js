const {  Telephone } = require('./tele');

class phoneObserver {
    notify(number){
        console.log(`dailed phone number: ${number}`)
    }
}
class customerObserver{
    notify(number){
        console.log(`Now Dailing ${number}`)
    }
}
module.exports.phoneObserver =  phoneObserver;
module.exports.customerObserver =  customerObserver;

//example usage

const telephone = new Telephone();

// Adding phone numbers

telephone.AddPhoneNumber("08038743599")
telephone.AddPhoneNumber("08036788980")
telephone.AddPhoneNumber("09076576755")

// Create my Observers

let gingerPhone = new phoneObserver();
let ginger = new customerObserver();

//adding observer
telephone.addObserver(gingerPhone);
telephone.addObserver(ginger);

telephone.DialPhoneNumber("08036788980")
