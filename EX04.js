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