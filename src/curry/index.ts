
export function curry<T extends (...args: any) => any>(fn: T): any {
    function curried(...args: any) {
        if (fn.length === args.length) {
            return fn(...args);
        }

        function getNextPortionOfArgs(...rest: any) {
            const restArgs = [...args, ...rest];
            const result = curried(...restArgs);

            return result;
        }

        return getNextPortionOfArgs;
    }

    return curried;
}