import { connect } from 'react-redux';
import AddCompanies from 'components/AddCompanies';
import actions from 'store/features/showCompanies/actions';

const mapDispatchToProps = dispatch => ({
	addCompany: company => dispatch(actions.addCompany(company)),
});

export default connect(null, mapDispatchToProps)(AddCompanies);