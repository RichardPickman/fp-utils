export function map<T, TResult>(callback: (item: T, index: number, array: T[]) => TResult, items: T[]): TResult[] {
    const result = [];

    for (let i=0; i < items.length; i++) {
        result.push(callback(items[i], i, items));
    }

    return result;
}