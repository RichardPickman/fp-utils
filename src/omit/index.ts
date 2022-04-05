function omit(obj: { [k: string]: unknown }, variables: string[]) {
    const result: Partial<typeof obj> = {};
    const keys = Object.keys(obj);

    for (const key of keys) {
        if (!variables.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}

export default omit;
