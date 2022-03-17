export function reduce<T, TResult>(callback: (acc: T | TResult, item: T, index: number, items: T[] ) => TResult, items: T[], initialState: TResult): any {
    let result = initialState !== undefined ? initialState : items[0]

    for (let i = initialState ? 1 : 0; i < items.length; i++) {
        result = callback(result, items[i], i, items)
    }

    return result
}