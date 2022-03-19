import { reverse } from "../reverse";

export function reduceRigth<T, TResult>(callback: (acc: TResult, item: T, index: number, items: T[]) => TResult, items: T[], initialState?: TResult): TResult {
    const hasInitialState = typeof initialState !== 'undefined';
    const reverseItems = reverse(items);
    let result = hasInitialState ? initialState : (reverseItems[0] as unknown as TResult);

    for (let i = hasInitialState ? 0 : 1; i < reverseItems.length; i++) {
        result = callback(result, reverseItems[i], i, reverseItems);
    }

    return result;
}