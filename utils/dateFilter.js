function fromDate(dateFrom) {
    return dateFrom ? new Date(dateFrom) : new Date("2024-09-01")
}

function toDate(dateTo) {
    return dateTo ? new Date(dateTo) : new Date("2099-10-30")
}

export {
    fromDate,
    toDate
}