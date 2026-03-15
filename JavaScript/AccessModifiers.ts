class BankAccount1 {
    public readonly accountNumber: string;
    protected readonly accountHolder: string;
    private balance: number;
    private pin: number;
    private address: string;
    protected isActive: boolean;


    constructor(accountNumber: string, accountHolder: string, balance: number, pin: number, address: string) {
        this.accountNumber = accountNumber; //public read only property
        this.accountHolder = accountHolder; 
    }
}