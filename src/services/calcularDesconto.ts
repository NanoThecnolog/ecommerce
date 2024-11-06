
/**
 * Recebe o valor do produto e o desconto em porcentagem (10, 20) para calcular e retornar o valor com desconto
 * @param price Preço original do produto
 * @param descont Valor do desconto em porcentagem
 * @returns Valor com desconto na Moeda Local (Reais)
 */
export function calcularDesconto(price: number, descont: number): string {
    const desconto = descont / 100;
    const valorComDesconto = Number((price * (1 - desconto)).toFixed(2))
    return valorComDesconto.toLocaleString("pt-br", { style: "currency", currency: "brl" })
}