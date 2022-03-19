export function reduceRight<T, TResult>(callback: (acc: TResult, item: T, index: number, items: T[]) => TResult, items: T[], initialState?: TResult): TResult {
    const hasInitialState = typeof initialState !== 'undefined';
    const itemsIndex = items.length;
    let result = hasInitialState ? initialState : (items[itemsIndex - 1] as unknown as TResult);

    for (let i = hasInitialState ? itemsIndex - 1 : itemsIndex - 2; i > -1; i--) {
        result = callback(result, items[i], i, items);
    }

    return result;
}
