export abstract class Account {
    private _name: string
    private _accountNumber: number
    protected _balance: number = 0
    private _status: boolean = true

    constructor(name:string, accountNumber: number) {
        this._name = name
        this._accountNumber = accountNumber
    }

    deposit = (value:number): void => {
        this._balance+=value
        console.log(`Voce depositou ${value}`);
    }
    withdraw = (value:number): void => {
        if (this._balance>=value && this.validateStatus()){
            this._balance-=value
            console.log(`Voce sacou ${value}`); 
        }else {
            console.log('saldo insuficiente ');
        }  
    }
    set name (name: string){
        this._name=name
    }
    get name ():string{
        return this._name
    }
    set accountNumber (accountNumber: number){
        this._accountNumber=accountNumber
    }
    get accountNumber ():number{
        return this._accountNumber
    }
    get balance (): number{
        return this._balance
    }
    set status (statusValue: boolean){
        this._status = statusValue
    }
    get status ():boolean{
        return this._status
    }
    protected validateStatus = (): boolean => {
        if (this._status) {
          return this._status
        }
    
        throw new Error('Conta inválida')
      }
}