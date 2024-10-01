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