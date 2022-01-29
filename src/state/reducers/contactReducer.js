const initialState = {};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'selected_contact_change':
            return ({
                type: action.type,
                data: action.payload,
            });

        default:
            return state;
    }
};

export default contactReducer;