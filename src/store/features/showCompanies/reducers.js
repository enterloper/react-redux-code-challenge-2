import types from './types';
const dummyCompanies = [
	{
		name: 'Grover Washington\'s Mustache Rides',
		phone: '42069',
		revenue: '100',
		address: '1600 Pennsylvania Avenue Washington, DC',
		id: 'abc'
	},
	{
		name: 'Archie Bunker\'s Boner Pills',
		phone: '64209',
		revenue: '666',
		address: '1 Vanbitheriver way Huntzville, AL',
		id: 'def'
	},
	{
		name: 'Popeye\'s Olive Oil Lactations',
		phone: '911',
		revenue: '12345678',
		address: '3 Skimpity Slim Slam Portland, OR',
		id: 'ghi'
	},
	{
		name: 'Funkie Homosapiens Patchouli Factory.',
		phone: '12345',
		revenue: '100',
		address: '1 Homeless Guy Way Santa Monica, CA',
		id: 'jkl'
	},
];

const initialState = {
    companies: dummyCompanies, // Replace with an empty array later, this is just for mocking.
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_COMPANY: {
	          console.log('action ADD_COMPANY has been detected');
	          console.log('Here\'s the action inside the reducer:', action);

            const newCompanies = [...state.companies];
            newCompanies.push(action.company);
						console.log('Here\'s the new list of Companies:', newCompanies);
            return {
                ...state,
                companies: newCompanies,
            };
        }
        default:
            return state;
    }
}