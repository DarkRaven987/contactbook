const initialState = {
    contacts: [
        {id: 1, number: '098-701-80-61', firstName: 'Oleh', secondName: 'Tsibulskyi', company:  '-',email: 'oleg123@gmail.com', avatar: "https://i.pinimg.com/originals/d1/c5/0d/d1c50d83b42898caa8f1c002b8caf620.jpg"},
        {id: 2, number: '098-702-85-58', firstName: 'Alena', secondName: 'Gorovaya', company:  'IT-corp',email: 'alena1989@gmail.com', avatar: "https://cdn.wallpaperjam.com/content/images/a4/d6/a4d631573608983cde09cd0bd4371cd87907861c.jpg"},
        {id: 3, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
    ],
    editMode: true,
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.concat(action.payload)
            }
        case 'EDIT_CONTACT':
            return state;
        case 'DELETE_CONTACT':
            return state;
        default:
            return state;
    }
};