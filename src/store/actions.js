import {ACTION_CREATE_CONTACT, ACTION_EDIT_CONTACT, ACTION_DELETE_CONTACT} from "./actionConsts";

export const createContact = (newValue) => {
    return {
        type: ACTION_CREATE_CONTACT,
        payload: newValue
    }
};

export const editContact = (newValue) => {
    return {
        type: ACTION_EDIT_CONTACT,
        payload: newValue
    }
};

export const deleteContact = (newValue) => {
    return {
        type: ACTION_DELETE_CONTACT,
        payload: newValue
    }
};