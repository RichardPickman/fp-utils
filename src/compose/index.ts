import { reduceRight } from '../reduceRight';

export function compose<T extends (...args: any) => any>(...fns: T[]): any {
    const composeIt = function (number: any) {
        return reduceRight((acc, fn) => {
            return fn(acc);
        }, fns, number);
    };

    return composeIt;
}