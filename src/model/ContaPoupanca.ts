import { Conta } from "./Conta";


export class ContaPoupanca extends Conta{

	//Atributo exclusivo da Conta poupança
private _niver: number;


//Construtor com a chamada para a Super Classe
	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number, niver: number) {
        super(numero,agencia,titular,tipo,saldo); // Chama o Construtor da Super Classe
        this._niver	 = niver;}


// Métodos GET e SET específicos da Classe Conta Poupanca
 
	public get niver(): number {
		return this._niver;
	}


	public set niver(value: number) {
		this._niver = value;
	}


	// Método visualizar sobrescrito (Polimorfismo)
public visualizar(): void {
        super.visualizar();
        console.log(`Aniversário da conta: ${this._niver}`);

    }
}
