import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/clickCounter/actions'

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(actions.incrementBy1()),
	decrement: () => dispatch(actions.decrementBy1()),
	resetNumberToZero: () => dispatch(actions.resetNumberToZero()),
});

export default connect(null, mapDispatchToProps)(HomePage);

