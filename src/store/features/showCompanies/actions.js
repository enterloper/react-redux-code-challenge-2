import types from './types';

function addCompany(company) {
    console.log("THE COMPANY IN THE ACTION", company)
    return {
        type: types.ADD_COMPANY,
        company: company,
    }
}

export default {
    addCompany,
}