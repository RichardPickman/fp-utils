function get(obj: { [k: string]: any }, path: string | string[], defaultValue?: unknown): unknown {
    let result;
    const properPath: string[] = typeof path === 'string' ? path.split('.') : path;

    if (obj[properPath[0]]) {
        if (properPath.length > 1) {
            return get(obj[properPath[0]], properPath.slice(1), defaultValue);
        }

        if (properPath.length === 1) {
            result = obj[properPath[0]];
        }
    } else {
        return defaultValue;
    }

    return result;
}

export default get;
