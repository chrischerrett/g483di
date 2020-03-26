import Files, { IFileDirection } from "../presentational/Files";
import { FilesAction, requestFiles } from "../../../actions/files";

import { StoreState } from "../../../models/state";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

const mapStateToProps = (state: StoreState, ownProps: { direction: IFileDirection }) => ({
    files: state.files[ownProps.direction],
    fileType: state.files.type,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, FilesAction>) => ({
    requestFiles: (direction: IFileDirection, fileType: string | null, page: number, pageSize: number) => {
        dispatch(requestFiles(direction, fileType, page, pageSize));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Files);
