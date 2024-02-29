class telephone{
    constructor(){
         this.phoneNum = new Set();
    }
    AddPhoneNumber(num){
        this.phoneNum.add(num);
    }
    RemovePhoneNumber(num){
        this.phoneNum.delete(num);
    }
    DialPhoneNumber(num){
        if(this.phoneNum.has(num)){
            console.log(`${num} is dailing`)
        }else{
            console.log("Phone number not found")
        }
    }
}
{{ }}