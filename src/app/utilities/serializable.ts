/**
 * Allow for serializing a class instance from JSON.
 *
 * @export
 * @class Serializable
 */
export class Serializable {
    /**
     * Instantiate this class from a JSON object.
     *
     * @param {*} jsonObj JSON object from which to instantiate
     * @memberof Serializable
     */
    serializeFromJSON(jsonObj: object) {
        // Assume this is a date if the regex matches date in form
        // yyyy-mm-dd
        const iso8601Date = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i;
        for (const propName in jsonObj) {
            if (iso8601Date.test(jsonObj[propName])) {
                this[propName] = new Date(jsonObj[propName]);
            } else {
                this[propName] = jsonObj[propName];
            }
        }
    }
}
