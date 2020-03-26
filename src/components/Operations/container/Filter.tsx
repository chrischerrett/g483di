import { Dispatch } from "redux";
import Filter from "../presentational/Filter";
import { connect } from "react-redux";
import { setFileType } from "../../../actions/files";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSetFileType: (fileType: string) => {
        dispatch(setFileType(fileType));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
