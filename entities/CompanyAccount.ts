import { Account } from "./Account";

export class CompanyAccount extends Account{
    private _loan:number = 0

    constructor(name:string, accountNumber: number){
        super(name,accountNumber)
    }

    getLoan = (value:number):void=>{
        if(this.validateStatus()){
            console.log('Voce pegou um emprestimo de ',value)
            this._loan+=value
            this._balance+=value
        }
        
    }
    payOffLoan = (value:number):void=>{
        if(this._loan>=value){
            console.log(`Voce pagou ${value} do emprestimo`)
            this._loan-=value
        }
    }
}