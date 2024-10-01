# Desafio Target

## 1. Valor da variável `SOMA`

O primeiro desafio consiste em calcular a soma dos números de 1 até 13. O código fornecido utiliza um loop para iterar pelos valores de `K` e somá-los à variável `SOMA`.

### Cálculo

A fórmula utilizada para calcular a soma dos números de uma progressão aritmética é:

```makefile

SOMA = (primeiro_termo + último_termo) * número_de_termos / 2

Substituindo os valores:

SOMA = (1 + 13) * 13 / 2 = 91

```

**Resposta:** O valor final da variável `SOMA` será 91.

---

## 2. Verificador de Sequência de Fibonacci em Node.js

O segundo desafio requer a implementação de um verificador para determinar se um número pertence à sequência de Fibonacci. A sequência de Fibonacci é formada pela soma dos dois números anteriores, começando com 0 e 1.

### Código em Node.js

```javascript
function fibonacciChecker(num) {
  let a = 0, b = 1, temp;

  while (b <= num) {
    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci!`;
    }
    temp = a + b;
    a = b;
    b = temp;
  }

  return `O número ${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso com entrada do usuário
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Informe um número: ', (num) => {
  console.log(fibonacciChecker(parseInt(num)));
  readline.close();
});
```

**Observação:** Utilizei o módulo `readline` para receber a entrada do usuário via console.

---

## 3. Análise de Faturamento Diário em Node.js

O terceiro desafio envolve a análise de dados de faturamento diário contidos em um arquivo JSON. A análise deve calcular o menor e o maior valor de faturamento, a média mensal e o número de dias com faturamento acima da média.

### Código em Node.js

```javascript
const fs = require('fs');

// Lendo os dados do arquivo JSON
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
```


---

## 4. Percentual de Representação por Estado em Node.js

Este desafio envolve calcular o percentual de representação de faturamento de diferentes estados em relação ao faturamento total.

### Código em Node.js

```javascript
const faturamentoPorEstado = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((soma, valor) => soma + valor, 0);

for (const estado in faturamentoPorEstado) {
  const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
```

---

## 5. Inversão de String em Node.js

O último desafio envolve a inversão de uma string fornecida pelo usuário.

### Código em Node.js

```javascript
function inverterString(str) {
  let stringInvertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  return stringInvertida;
}

// Exemplo de uso com entrada do usuário
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Informe uma string: ', (str) => {
  console.log(inverterString(str));
  readline.close();
});
```

**Observação:** Utilizei o módulo `readline` para capturar a entrada do usuário via console.

---

## Observações Finais

- Certifique-se de instalar o módulo `readline` em seu projeto Node.js com o comando `npm install readline`.
