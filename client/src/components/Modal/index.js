/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalFooter, Col, Form, FormGroup, Input } from 'reactstrap';

export function EmailModal(props) {
    return (
        <div>
            {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
            <Modal isOpen={props.isOpen}>
                <ModalHeader>{props.modalText}</ModalHeader>
                <Form>
                    <FormGroup row>
                        <Col sm={12}>
                            <Input onChange={props.handleInputChange} type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                        </Col>
                    </FormGroup>
                </Form>
                <ModalFooter>
                    <Button color="primary" onClick={props.openConfirmModal}>Submit</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export function ConfirmModal(props) {
    return (
        <div>
            {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
            <Modal isOpen={props.isOpen}>
                <ModalHeader>{props.modalText}</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={props.closeModal}>Ok</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

