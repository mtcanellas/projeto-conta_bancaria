import { Conta } from "./Conta";
import { colors } from "../util/Color";


//CTRL + SHIFT + P pra puxar GET SET E O CONSTRUTOR

export class ContaCorrente extends Conta{ // CRIANDO A CLASSE CONTA-CORRENTE HERDANDO A CONTA

    // Atributos especificos da classe ContaCorrente
    private _limite: number;


    // CONSTRUTOR COM A CHAMADA PARA A SUPERCLASS


	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number, limite: number) {
        // ATRIBUTO DA CLASSE HERDADA VEM SEMPRE DEPOIS DA SUPER CLASSE
        super(numero,agencia,titular,tipo,saldo); // chamada da super classe (conta) pega os atributos, e acrescenta os da classe herdada
		this._limite = limite;
	}

// METODOS GET E SET ESPECIFICO DA CONTA CORRENTE
	public get limite(): number {
		return this._limite;
	}


 
	public set limite(value: number) {
		this._limite = value;
	}




    public sacar(valor: number): boolean {
    
            if(valor <= 0){
                console.log(colors.fg.red, "O valor deve ser positivo",colors.reset);
                return false;
            }
    
            if(valor > this.saldo + this._limite){
                console.log(colors.fg.red, "Saldo Insuficiente!",colors.reset);
                return false;
            }
    
            this.saldo -= valor;
            return true;
        }



    //metodo visualizar de polimorfismo 
    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da Conta: ${this._limite}`); // chamando o visualizar lá na super class conta pra visualizar o limite
    }
}