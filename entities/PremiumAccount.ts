import { Account } from "./Account";

export class PremiumAccoumt extends Account{
    constructor(name:string, accountNumber: number){
        super(name,accountNumber)
    }
    deposit = (value:number): void => {
        this._balance+=value+10
        console.log(`Voce depositou ${value+10}`)
    }
}