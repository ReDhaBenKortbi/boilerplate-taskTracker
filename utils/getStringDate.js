export function getStringDate(date) {
    return date ? new Date(date).toDateString() : new Date().toDateString();
}