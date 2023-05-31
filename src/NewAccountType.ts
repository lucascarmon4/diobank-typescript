import { DioAccount } from "./DioAccount";

export class NewAccountType extends DioAccount {
    constructor(name:string, accountNumber:number) {
        super(name, accountNumber);
    }
    
    deposit = (value: number):void => {
        if (this.validateStatus()) {
            this.addBalance(value+10);
            console.log(`Você depositou ${value+10} reais com sucesso!`);
        }
    }
}