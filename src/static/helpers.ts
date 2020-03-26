import { FILE_TYPES_IN, FILE_TYPES_OUT } from "../constants";

import { IFileDirection } from "../components/Operations/presentational/Files";

export function title(value: string) {
    if (!value) return "";
    return value.replace(/\b\w/, v => v.toUpperCase());
}

export function getFileTypes() {
    return FILE_TYPES_IN.concat(FILE_TYPES_OUT).sort();
}

export function randomFileType(direction: IFileDirection) {
    switch (direction) {
        case "in":
            return FILE_TYPES_IN[Math.floor(Math.random() * FILE_TYPES_IN.length)];
        case "out":
            return FILE_TYPES_OUT[Math.floor(Math.random() * FILE_TYPES_OUT.length)];
    }
}
