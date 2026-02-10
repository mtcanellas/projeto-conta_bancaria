export function formatarMoeda(valor: number):string {
    return new Intl.NumberFormat ('pt-br' , {
        style: 'currency' , currency : 'BRL'
    }).format(valor)
}
