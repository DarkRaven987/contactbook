import {ACTION_CREATE_CONTACT, ACTION_EDIT_CONTACT, ACTION_DELETE_CONTACT, ACTION_CHANGE_EDIT_MODE} from "./actionConsts";

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

export const changeEditMode = (newValue) => {
    return {
        type: ACTION_CHANGE_EDIT_MODE,
        payload: newValue
    }
};