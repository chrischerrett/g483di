import { default as File } from "../File";

export default class FilesState {
    public in: File[] | null;
    public out: File[] | null;
    public type: string | null;
}
