import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles.less';

const propTypes = {
    companies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        revenue: PropTypes.string,
    })),
};

class ListCompanies extends Component {
    render() {
        console.log('Testicular Tickler:', this.props);

        return (
            <React.Fragment>
                <div>
                {this.props.companies.map(company => (
                    <div key={company.id}>
	                      <span>Name:</span><span>{company.name}</span>
                        <br />
	                      <span>Number:</span><span>{company.number}</span>
                        <br />
	                      <span>Revenue:</span><span>{company.revenue}</span>
                    </div>)
                )}
                </div>
            </React.Fragment>
        );
    }
}

ListCompanies.propTypes = propTypes;
export default ListCompanies;