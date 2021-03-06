// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

export class ConfigurationReader {

    public static readArray(value: any): Array<any> {
        if (this.isArray(value)) {
            return value;
        } else {
            throw `Expected an array. Couldn't read ${value}`;
        }
    }

    private static isArray(value: any): boolean {
        return Array.isArray(value);
    }

    private static isBoolean(value: any): boolean {
        return typeof value === "boolean";
    }

    private static isString(value: any): boolean {
        return typeof value === "string";
    }

    public static readString(value: any): string {
        if (this.isString(value)) {
            return value;
        } else {
            throw `Expected a string. Couldn't read ${value}`;
        }
    }

    public static readBoolean(value: any): boolean {
        if (this.isBoolean(value)) {
            return value;
        } else if (value === "true" || value === "false") {
            return value === "true";
        } else {
            throw `Expected a boolean. Couldn't read ${value}`;
        }
    }
}