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
    fromJSON(jsonObj: any) {
        for (const propName in jsonObj) {
            // Todo: need better way of reliably deserializing dates
            if (propName.toLowerCase().includes('date')) {
                this[propName] = new Date(jsonObj[propName]);
            } else {
                this[propName] = jsonObj[propName];
            }
        }
    }
}
