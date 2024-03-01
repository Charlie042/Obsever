const {   phoneObserver, customerObserver } = require('./observer')
 class Telephone{
    constructor(){
         this.phoneNum = new Set();
         this.observers = []
    }
    AddPhoneNumber(num){
        this.phoneNum.add(num);
    }
    RemovePhoneNumber(num){
        this.phoneNum.delete(num);
    }
    DialPhoneNumber(num){
        if(this.phoneNum.has(num)){
            this.notifyObservers(num)
        }else{
            console.log("Phone number not found")
        }
    }
    addObserver(num){
        this.observers.push(num)
    }
    removeObserver(num){
        this.observers = this.observers.filter((observer) => observer !== num);
    }
    notifyObservers(data){
        this.observers.forEach(observer => {
            observer.notify(data);
        });

    }
}
module.exports.Telephone = Telephone;