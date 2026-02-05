import { colors } from "./src/util/Color";
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Input";

export function main() {

    let opcao: number;

    // Instanciar Objetos da Classe Conta

    const c1 = new Conta(1, 1234, "Sofia", 1, 100000.00);

    c1.visualizar();

    // Testes do Método Sacar
    console.log("Sacar 100,00: ", c1.sacar(100.00));
    console.log("Sacar 200000.00: ", c1.sacar(200000.00));
    console.log("Sacar 0.00: ", c1.sacar(0.00));

    // Testes do Método Depositar
    console.log("Depositar -10.00: ");
    c1.depositar(-10.00);

    console.log("Depositar 500.00: ");
    c1.depositar(500.00);

    c1.visualizar();

    // console.log("O Titular da Conta é: ", c1.titular);
    // console.log("O Saldo da Conta é: ", c1.saldo);

  

    while (true) {

        console.log(colors.bg.blue, colors.fg.black,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Matheus Tiago Canellas - mtcanellas@gmail.com");
    console.log("github.com/mtcanellas");
    console.log("*****************************************************");
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(colors.reset,"\nPressione enter para continuar...");
    Input.prompt();
}

main();