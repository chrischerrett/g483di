import { RECEIVE_IN_FILES, RECEIVE_OUT_FILES, SET_FILE_TYPE } from "../constants";

import { FilesAction } from "../actions/files";
import FilesState from "../models/state/FilesState";

const initialState: FilesState = {
    in: null,
    out: null,
    type: null,
};

export function filesReducer(files: FilesState = initialState, action: FilesAction): FilesState {
    switch (action.type) {
        case SET_FILE_TYPE:
            return { ...files, type: action.fileType };
        case RECEIVE_IN_FILES:
            return { ...files, in: action.files };
        case RECEIVE_OUT_FILES:
            return { ...files, out: action.files };
        default:
            return files;
    }
}
