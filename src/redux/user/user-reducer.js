const InitialState = {
    currentuser : null
};

const userReducer = (state = InitialState,action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentuser: action.payload
            };

        default:
            return state;
    }

}

export default userReducer;