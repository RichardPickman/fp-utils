export function findIndex<T>(callback: (item: T, index: number, items: T[]) => T, items: T[]) {
    for (let i=0; i < items.length; i++) {
        const callbackResult = callback(items[i], i, items)

        if (callbackResult) return i
    }
}