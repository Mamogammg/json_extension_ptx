//% color=#3271D0 weight=100 block="JSON Extension"
namespace jsonExtension {

    /**
     * Creates a new empty JSON object.
     */
    //% block="create new empty JSON"
    export function createJson(): any {
        return {};
    }

    /**
     * Converts an object to a JSON string.
     * @param obj The object to convert
     */
    //% block="convert $obj to JSON string"
    export function stringify(obj: any): string {
        return JSON.stringify(obj);
    }

    /**
     * Converts a JSON string to an object.
     * @param text The JSON string to convert
     */
    //% block="convert $text to object"
    export function parse(text: string): any {
        return JSON.parse(text);
    }

    /**
     * Sets a property on an object.
     * @param obj The object to set the property on
     * @param key The name of the property
     * @param value The value to assign to the property
     */
    //% block="set property $key of $obj to $value"
    export function setProperty(obj: any, key: string, value: any): void {
        obj[key] = value;
    }

    /**
     * Gets the value of a property from an object.
     * @param obj The object to get the value from
     * @param key The name of the property
     */
    //% block="get value of $key from $obj"
    export function getProperty(obj: any, key: string): any {
        return obj[key];
    }
}
