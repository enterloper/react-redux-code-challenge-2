import { connect } from 'react-redux';
import ListCompanies from 'components/ListCompanies';

const mapStateToProps = state => ({
    companies: state.showCompanies.companies
});

export default connect(mapStateToProps)(ListCompanies);

