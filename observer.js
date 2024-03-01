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

