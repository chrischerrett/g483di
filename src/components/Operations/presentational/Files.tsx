import { Alert, Button, Col, Modal, Table } from "react-bootstrap";
import { FILE_TYPES_IN, FILE_TYPES_OUT } from "../../../constants";

import { File } from "../../../models";
import Moment from "moment";
import Pagination from "./Pagination";
import React from "react";
import classnames from "classnames";
import { title } from "../../../static/helpers";

export type IFileDirection = "in" | "out";

export interface IFilesProps {
    files: File[] | null;
    fileType: string | null;
    direction: IFileDirection;
    requestFiles: (direction: IFileDirection, fileType: string | null, page: number, pageSize: number) => void;
}

export interface IFileState {
    selectedFile: File | null;
}

class Files extends React.Component<IFilesProps, IFileState> {
    constructor(props: IFilesProps) {
        super(props);

        this.state = {
            selectedFile: null,
        };
    }

    public render() {
        if (this.props.fileType) {
            if (this.props.direction === "in") {
                if (!FILE_TYPES_IN.includes(this.props.fileType)) {
                    return null;
                }
            }
            if (this.props.direction === "out") {
                if (!FILE_TYPES_OUT.includes(this.props.fileType)) {
                    return null;
                }
            }
        }

        return (
            <Col className={"gs-Files"}>
                <h5>{`${title(this.props.direction)}bound`}</h5>
                {!this.props.files && <Alert variant={"info"}>There are no files</Alert>}
                {this.props.files && (
                    <>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Date / Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.files?.map((file: File) => {
                                    return (
                                        <tr
                                            onClick={() => this.onShowModel(file)}
                                            key={file.id}
                                            className={classnames({ "bg-danger text-white": file.status === "failed" })}
                                        >
                                            <td>{file.type}</td>
                                            <td>{title(file.status ?? "ok")}</td>
                                            <td>{Moment(file.datetime).format("Do MMM, HH:mm:ss")}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        <Pagination page={0} pageCount={10} onPageChange={i => this.onPageChange(i)} />
                    </>
                )}
                <Modal size="lg" show={this.state.selectedFile != null} onHide={() => this.onHideModel()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.selectedFile?.type}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.selectedFile?.datetime}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={() => this.onHideModel()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        );
    }

    public componentDidMount() {
        this.props.requestFiles(this.props.direction, this.props.fileType, 0, 20);
    }

    public componentDidUpdate(prevProps: IFilesProps) {
        if (this.props.fileType !== prevProps.fileType) {
            this.props.requestFiles(this.props.direction, this.props.fileType, 0, 20);
        }
    }

    private onPageChange(index: number) {
        this.props.requestFiles(this.props.direction, this.props.fileType, index, 20);
    }

    private onShowModel(file: File) {
        this.setState({ selectedFile: file });
    }

    private onHideModel() {
        this.setState({ selectedFile: null });
    }
}

export default Files;
