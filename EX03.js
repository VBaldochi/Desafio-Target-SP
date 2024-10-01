const fs = require('fs');

// Lendo os dados do arquivo JSON (
const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));

// Extraindo os valores de faturamento e removendo dias sem faturamento
const faturamentoDiario = dados.map(item => item.valor).filter(valor => valor > 0);

// Calculando menor e maior valor de faturamento
const menorFaturamento = Math.min(...faturamentoDiario);
const maiorFaturamento = Math.max(...faturamentoDiario);

// Calculando a média mensal de faturamento
const mediaMensal = faturamentoDiario.reduce((soma, valor) => soma + valor, 0) / faturamentoDiario.length;

// Contando dias com faturamento acima da média
const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento: ", menorFaturamento);
console.log("Maior valor de faturamento: ", maiorFaturamento);
console.log("Número de dias com faturamento acima da média mensal: ", diasAcimaDaMedia);