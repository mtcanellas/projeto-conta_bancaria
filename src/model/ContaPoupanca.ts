import { Conta } from "./Conta";
import { colors } from "../util/Color";

export class ContaPoupanca extends Conta{

private _niver: Number;


	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number, niver: number) {
        super(numero,agencia,titular,tipo,saldo);
        this._niver	 = niver;}



 
	public get niver(): Number {
		return this._niver;
	}


	public set niver(value: Number) {
		this._niver = value;
	}


public visualizar(): void {
        super.visualizar();
        console.log(`Limite da Conta: ${this._niver}`);

    }
}
