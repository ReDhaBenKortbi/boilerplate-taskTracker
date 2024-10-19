export function limitHandler(limit, maximum_limit) {
    if(limit < 1) return maximum_limit;
    return limit > maximum_limit ? maximum_limit : limit
}
