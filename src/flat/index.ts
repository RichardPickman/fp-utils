export function flat<T>(array: any): T[] {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            const flatteredArray = flat(array[i]);
            result.push(...flatteredArray);
        } else {
            result.push(array[i]);
        }
    }

    return result;
}