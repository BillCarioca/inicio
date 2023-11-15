import { Account } from "./Account";

export class PeopleAccount extends Account{
    private readonly _id:number
    constructor(id:number,name:string, accountNumber: number){
        super(name,accountNumber)
        this._id=id
    }
    get id ():number{
        return this._id
    }
}