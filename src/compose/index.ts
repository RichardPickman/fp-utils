export function compose<T extends (...args: any) => any>(...fns: T[]): any {
    const composeIt = function(arg: any) {
        let previousResult = arg;

        for (let i = fns.length - 1; i > -1; i--) {
            previousResult = fns[i](previousResult)
        }

        return previousResult
    };

    return composeIt;
}