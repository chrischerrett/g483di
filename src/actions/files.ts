import { Action, Dispatch } from "redux";
import { RECEIVE_IN_FILES, RECEIVE_OUT_FILES, SET_FILE_TYPE } from "../constants";

import File from "../models/File";
import { IFileDirection } from "../components/Operations/presentational/Files";
import { api } from "../static/api";

export type FilesAction = IReceiveInFiles | IReceiveOutFiles | ISetFileType;

export interface IReceiveInFiles extends Action<typeof RECEIVE_IN_FILES> {
    files: File[] | null;
}

export interface IReceiveOutFiles extends Action<typeof RECEIVE_OUT_FILES> {
    files: File[] | null;
}

export interface ISetFileType extends Action<typeof SET_FILE_TYPE> {
    fileType: string;
}

export const receiveInFiles = (files: File[] | null): IReceiveInFiles => ({
    type: RECEIVE_IN_FILES,
    files,
});

export const receiveOutFiles = (files: File[] | null): IReceiveOutFiles => ({
    type: RECEIVE_OUT_FILES,
    files,
});

export const setFileType = (value: string): ISetFileType => ({
    type: SET_FILE_TYPE,
    fileType: value,
});

export const requestFiles = (direction: IFileDirection, fileType: string | null, page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        let files;
        if (!fileType) {
            files = api("GET", `files/${direction}`, { page, pageSize }).then(r => r.json());
        } else {
            files = api("GET", `files/${fileType}`, { page, pageSize }).then(r => r.json());
        }

        Promise.all([files])
            .then(data => {
                const files = data[0].data;

                switch (direction) {
                    case "in":
                        dispatch(receiveInFiles(files));
                        break;
                    case "out":
                        dispatch(receiveOutFiles(files));
                        break;
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};
