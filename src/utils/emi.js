/**
 * Standard EMI formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
 * @param {number} principal - loan amount
 * @param {number} annualRate - annual interest rate in percent
 * @param {number} months - tenure in months
 */
export function calculateEmi(principal, annualRate, months) {
  if (principal <= 0 || months <= 0) return 0
  if (annualRate <= 0) return principal / months

  const r = annualRate / 12 / 100
  const factor = Math.pow(1 + r, months)
  return (principal * r * factor) / (factor - 1)
}

export function formatINR(value, decimals = 0) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value || 0)
}
