export function reduceRight<T, TResult>(callback: (acc: TResult, item: T, index: number, items: T[]) => TResult, items: T[], initialState?: TResult): TResult {
    const hasInitialState = typeof initialState !== 'undefined';
    let result = hasInitialState ? initialState : (items[items.length - 1] as unknown as TResult);

    for (let i = hasInitialState ? items.length - 1 : items.length - 2; i > -1; i--) {
        result = callback(result, items[i], i, items);
    }

    return result;
}
