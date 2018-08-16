export class Utilities {
    /** Get the string representation of any enum value, should it exist. */
    static enumToString<T> (val: number, en: T) {
        return en[val];
    }
    /** Get the string representations of a list of enum values, should they exist. */
    static enumsToString<T> (vals: number[], en: T) {
        const result: string[] = [];
        vals.forEach(v => {
            result.push(Utilities.enumToString(v, en));
        });
        return result;
    }
}
