function findIndex(callback, items) {
    for (let i=0; i < items.length; i++) {
        const callbackResult = callback(items[i], i, items)

        if (callbackResult) return i
    }
}