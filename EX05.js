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