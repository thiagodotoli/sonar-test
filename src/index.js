const classifyNumber = (n) => {
  if (n < 0) return 'negative';
  else if (n === 0) return 'zero';
  else if (n > 0 && n <= 10) return 'small';
  else if (n > 10 && n <= 100) return 'medium';
  else return 'large';
}

export default classifyNumber;