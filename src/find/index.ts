export function find<T>(callback: (item: T, index: number, items: T[]) => T, items: T[]) {
    for (let i=0; i < items.length; i++) {
        const result = callback(items[i], i, items)

        if (result) return items[i]
    }
}