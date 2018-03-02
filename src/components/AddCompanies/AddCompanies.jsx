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
		this.state = {
			name: '',
			address: '',
			phone: '',
			revenue: '',
		};

		this.addNewCompany = this.addNewCompany.bind(this);
		this.handleFormControlChange = this.handleFormControlChange.bind(this);
	}

	addNewCompany(e) {
		e.preventDefault();
		const newCompany = {...this.state};
		this.props.addCompany(newCompany)
	}

	handleFormControlChange(e) {
		const { value, id } = e.target;
		console.log('VALUE:', value);
		console.log('FOR ITEM WITH NAME:', id);
		this.setState({
			[id]: value,
		});
	}

  render() {
    return (
      <div className="addCompanies_wrapper">
        <Form horizontal id="test">
					<FormGroup controlId="name">
					  <ControlLabel>Name:</ControlLabel>
					  <FormControl
					    type="text"
							value={this.state.name}
					    placeholder="Company Name"
					    onChange={this.handleFormControlChange}
					  />
					</FormGroup>
					<FormGroup controlId="address">
					  <ControlLabel>Address:</ControlLabel>
					  <FormControl
					    type="text"
							value={this.state.address}
					    placeholder="Company Address"
					    onChange={this.handleFormControlChange}
					  />
					</FormGroup>
					<FormGroup controlId="phone">
						<ControlLabel>Phone:</ControlLabel>
						<FormControl
						  type="text"
							value={this.state.phone}
						  placeholder="Company Phone"
						  onChange={this.handleFormControlChange}
						/>
					</FormGroup>
					<FormGroup controlId="revenue">
						<ControlLabel>Revenue:</ControlLabel>
						<FormControl
						  type="text"
							value={this.state.revenue}
						  placeholder="Company Revenue"
						  onChange={this.handleFormControlChange}
						/>
					</FormGroup>
          <Button
            type="button"
            form="test"
            onClick={this.addNewCompany}
          >
              Submit
          </Button>
        </Form>
      </div>
    );
  }
}

AddCompanies.propTypes = propTypes;
export default AddCompanies;