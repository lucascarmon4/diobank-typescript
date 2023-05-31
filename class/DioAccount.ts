export class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor (name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    getName = (): string => {
        return this.name;
    }
    setBalance = (value: number): void => {
        this.balance = value;
    }
    addBalance = (value:number): void => {
        this.balance += value;
    }
    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance+=value;
            console.log(`Você depositou ${value} reais com sucesso! Novo saldo: ${this.balance}`);
        }
    }
    withdraw = (value: number): void => {
        if (value > this.balance) {
            throw new Error(`Você não pode sacar um valor maior que ${this.balance}!`);
        }
        else {
            if (this.validateStatus()) {
                this.balance-=value;
                console.log(`Você sacou ${value} reais com sucesso! Novo saldo: ${this.balance}`);
            }
        }    
    }
    getMyBalance = (): void => {
        console.log(this.balance);
    }
     validateStatus = () : boolean => {
        if(this.status) {
            return this.status;
        }
        
        throw new Error("Sua conta está desativada! Por favor, contate o banco.")
    }
}
