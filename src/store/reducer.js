const initialState = {
    contacts: [
        {id: 1, number: '098-701-80-61', firstName: 'Oleh', secondName: 'Tsibulskyi', company:  '-',email: 'oleg123@gmail.com', avatar: "http://t.wallpaperweb.org/wallpaper/miscellaneous/1600x1200/quasi_unknown_20061207_0040.jpg"},
        {id: 2, number: '098-702-85-58', firstName: 'Alena', secondName: 'Gorovaya', company:  'IT-corp',email: 'alena1989@gmail.com', avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/alena4p-profile_image-9039433ec1ac917d-300x300.jpeg"},
        {id: 3, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: "https://itc.ua/wp-content/uploads/2015/04/Mad-Max-Fury-Road-2-671x362.png"},
    ],
    editMode: false,
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.concat(action.payload)
            };
        case 'EDIT_CONTACT':
            let contacts = state.contacts.map( el => {
                if(el.id === action.payload.id){
                   return el=action.payload;
                }else{
                    return el;
                }
            });
            return {
                ...state, contacts: contacts
            };
        case 'DELETE_CONTACT':
            state.contacts = state.contacts.filter((el) => el.id !== action.payload);
            return {
                ...state,
            };
        case 'CHANGE_EDIT_MODE':
            return {
                ...state, editMode: action.payload
            };
        default:
            return state;
    }
};