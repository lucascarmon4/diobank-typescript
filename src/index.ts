import { DioAccount } from "./DioAccount";
import { CompanyAccount } from "./CompanyAccount";
import { NewAccountType } from "./NewAccountType";


const dioAccount: DioAccount = new NewAccountType("Lucas", 1);
const companyAccount: CompanyAccount = new CompanyAccount("Nathy", 2);
const newAccountType: NewAccountType = new NewAccountType("Joao", 3);

dioAccount.getName();
dioAccount.deposit(120);
dioAccount.getMyBalance();
dioAccount.addBalance(20);
dioAccount.setBalance(1000);
dioAccount.withdraw(100);

companyAccount.getLoan(15000);

newAccountType.deposit(150);

console.log(dioAccount, companyAccount, newAccountType);

