export const calculatePercentage = ({
	currentValue,
	totalValue
}: {
	currentValue: number
	totalValue: number
}) => {
	return Math.min((currentValue / totalValue) * 100, 100)
}
