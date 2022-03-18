export function filter<T>(callback: (item: T, index: number, items: T[]) => boolean, items: T[]) {
    const result = [];

    for (let i=0; i < items.length; i++) {
        const callbackResult = callback(items[i], i, items);

        if (callbackResult) result.push(items[i]);
    }

    return result;
}