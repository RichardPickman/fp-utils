function map(callback, items) {
    const result = []

    for (let i=0; i < items.length; i++) {
        result.push(callback(items[i], i, items))
    }

    return result
}