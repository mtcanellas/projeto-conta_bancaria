import { Conta } from "./Conta";
import { Colors } from "../util/Color";
import { formatarMoeda } from "../util/Currency";



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


//Método sacar sobrescrito

    public sacar(valor: number): boolean {
    
            if(valor <= 0){
                console.log(Colors.fg.red, "O valor deve ser positivo",Colors.reset);
                return false;
            }
    
            if(valor > this.saldo + this._limite){
                console.log(Colors.fg.red, "Saldo Insuficiente!",Colors.reset);
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