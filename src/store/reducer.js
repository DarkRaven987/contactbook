const initialState = {
    contacts: [
        {id: 1, number: '098-701-80-61', firstName: 'Oleh', secondName: 'Tsibulskyi', company:  '-',email: 'oleg123@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
        {id: 2, number: '098-702-85-58', firstName: 'Alena', secondName: 'Gorovaya', company:  'IT-corp',email: 'alena1989@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
        {id: 3, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
        {id: 4, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
        {id: 5, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
        {id: 6, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
        {id: 7, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: "https://picsum.photos/200/300/?random"},
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_CONTACT':
            return state;
        case 'EDIT_CONTACT':
            return state;
        case 'DELETE_CONTACT':
            return state;
        default:
            return state;
    }
};

console.log(initialState.contacts);