/**
 * Formats a number as currency
 * @param value Number to format as currency
 * @returns Formatted currency string (e.g. $1,234.56)
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

/**
 * Formats a large number with appropriate suffix (K, M, B, T)
 * @param num Number to format
 * @returns Formatted string with appropriate suffix
 */
export function formatLargeNumber(num: number): string {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(1) + 'T';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Formats a percentage value with + or - sign
 * @param value Percentage value
 * @returns Formatted percentage string (e.g. +1.23% or -1.23%)
 */
export function formatPercentage(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}
