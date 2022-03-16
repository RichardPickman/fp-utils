function filter(callback, items) {
    const result = []

    for (let i=0; i < items.length; i++) {
        const callbackResult = callback(items[i], i, items)

        if (callbackResult) result.push(items[i])
    }

    return result
}