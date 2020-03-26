import { Col, Form, Row } from "react-bootstrap";

import React from "react";
import { getFileTypes } from "../../../static/helpers";

interface IFilterProps {
    onSetFileType: (value: string) => void;
}

class Filter extends React.Component<IFilterProps> {
    public render() {
        return (
            <Row>
                <Col>
                    <Form.Group controlId="fileTypes">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                this.props.onSetFileType(e.target.value)
                            }
                        >
                            <option value="">All</option>
                            {getFileTypes().map(v => {
                                return (
                                    <option key={v} value={v}>
                                        {v}
                                    </option>
                                );
                            })}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
        );
    }
}

export default Filter;
