import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

import Files from "../container/Files";
import Filter from "../container/Filter";
import React from "react";

class Operations extends React.Component {
    public render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Filter />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Activity</h2>
                        <Tabs id="files">
                            <Tab title="Log" eventKey="list">
                                <Row>
                                    <Files direction="in" />
                                    <Files direction="out" />
                                </Row>
                            </Tab>
                            <Tab title="Graphs" eventKey="graphs"></Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Operations;
