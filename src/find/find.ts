function find(callback, items) {
    for (let i=0; i < items.length; i++) {
        const result = callback(items[i], i, items)

        if (result) return items[i]
    }
}