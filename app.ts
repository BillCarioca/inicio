import { PremiumAccoumt } from './entities/PremiumAccount';
import { CompanyAccount } from "./entities/CompanyAccount"
import { PeopleAccount } from "./entities/PeopleAcount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(30)
companyAccount.getLoan(50)
console.log(companyAccount)
const premiumAccoumt: PremiumAccoumt = new PremiumAccoumt('Bill', 30)
premiumAccoumt.deposit(50)
console.log(premiumAccoumt);
