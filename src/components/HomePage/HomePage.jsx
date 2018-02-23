import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	resetNumberToZero: PropTypes.func.isRequired,
};

class HomePage extends Component {
	render() {
		const {	increment, decrement, resetNumberToZero } = this.props;
		return (
			<React.Fragment>
				<div className="home__wrapper">
					<div className="home__abacus">
						<button	onClick={increment}>
							Increment
						</button>
						<button	onClick={decrement}>
							Decrement
						</button>
						<button	onClick={resetNumberToZero}>
							Reset Number
						</button>
					</div>
					<div>
						Code for Homepage goes here!
					</div>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;