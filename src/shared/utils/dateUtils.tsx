export const displayDate = ({ date }: { date: string }) => {
	try {
		const convertedDate = new Date(date)
		return convertedDate.toLocaleDateString()
	} catch (e) {
		return date
	}
}
