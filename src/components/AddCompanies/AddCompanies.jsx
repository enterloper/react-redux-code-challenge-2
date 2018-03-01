import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';
import './styles.less';

const propTypes = {
    addCompany: PropTypes.func.isRequired,
};

class AddCompanies extends Component {
	constructor(props) {
		super(props);
		
		this.addNewCompany = this.addNewCompany.bind(this);
	}
		addNewCompany(e) {
			e.preventDefault();
			console.log('THIS:', this.props);
		}
    render() {
        return (
            <div className="addCompanies_wrapper">
                <Form horizontal>
                    <FormGroup controlId="addCompanyForm">
                        <Col componentClass={ControlLabel} sm={2}>
                            Add Company
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Company name" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Address" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Phone Number" />
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Revenue" />
                        </Col>
                        <Button
                          type="submit"
                          onClick={this.addNewCompany}
                        >
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

AddCompanies.propTypes = propTypes;
export default AddCompanies;