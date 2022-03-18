export function find<T>(callback: (item: T, index: number, items: T[]) => boolean, items: T[]) {
    for (let i=0; i < items.length; i++) {
        const result = callback(items[i], i, items);

        if (result) return items[i];
    }
}