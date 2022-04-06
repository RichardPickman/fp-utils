function omit(obj: { [k: string]: unknown }, names: string[]) {
    const result: Partial<typeof obj> = {};
    const keys = Object.keys(obj);

    for (const key of keys) {
        if (!names.includes(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}

export default omit;
