import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import './styles.less';

class AddEmployee extends Component {
    render() {
        this.cumlord69 =  () => {
            console.log('cumlord69');
        };

        return (
            <React.Fragment>
                <Form horizontal>
                    <FormGroup controlId="addEmployeeForm">
                        <Col componentClass={ControlLabel} sm={2}>
                            Add Employee
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Employee Name" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Employee Phone Number" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Employee Email" />
                        </Col>
                    </FormGroup>
                    <Button onClick={this.cumlord69} type="submit">Submit</Button>
                </Form>
            </React.Fragment>
        );
    }
}


export default AddEmployee;