/**
 * A Promise-based version of rxjs' tap.
 */
export function tap<T>(func: (d: T) => void): (data: T) => T {
    return (data: T) => {
        func(data);
        return data;
    }
}
