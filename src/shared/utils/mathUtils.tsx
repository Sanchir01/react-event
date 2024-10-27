export const calculatePercentage = (currentValue, totalValue) => {
    return Math.min((currentValue / totalValue) * 100, 100);
}