function pick(obj: { [k: string]: any }, item: string): Partial<typeof obj> | null {
    const result: Partial<typeof obj> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (key === item) {
            result[key] = value;
            return result;
        }

        if (typeof value === 'object') {
            const nested = pick(value, item);

            if (nested) return nested;
        }
    }

    return null;
}

export default pick;
