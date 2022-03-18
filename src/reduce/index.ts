export function reduce<T, TResult>(callback: (acc: TResult, item: T, index: number, items: T[]) => TResult, items: T[], initialState?: TResult): TResult {
    const hasInitialState = typeof initialState !== 'undefined'
    let result = hasInitialState ? initialState : (items[0] as unknown as TResult)

    for (let i = hasInitialState ? 0 : 1; i < items.length; i++) {
        result = callback(result, items[i], i, items)
    }

    return result
}