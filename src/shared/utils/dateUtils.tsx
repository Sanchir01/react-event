export const displayDate = (date) => {
    try {
        const convertedDate = new Date(date);
        return convertedDate.toLocaleDateString();
    } catch (e) {
        return date;
    }
}