export const changeSelectedContact = (selectedContact) => {
    return (dispatch) => {
        dispatch({
            type: "selected_contact_change",
            payload: selectedContact
        });
    }
}