function omit(obj: {}, variables: string[]): {} {
    const result = new Object;
    const keys = Object.keys(obj)

    for (let i = 0; i < keys.length; i++) {
        if (variables.indexOf(keys[i]) > -1) continue;
        // @ts-ignore
        else result[keys[i]] = obj[keys[i]];
    }

    return result;
}

export default omit;
