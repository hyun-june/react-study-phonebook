import { upload } from "@testing-library/user-event/dist/upload";

let initialState = {
    contactList:[],
    keyword:"",
    gender:""
};

function reducer (state = initialState,action){
    const {type, payload} = action
    switch(type){
        case "ADD_CONTACT":
            return {...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber,gender:payload.gender}]}
        case "SEARCHKEYWORD":
            return {...state,keyword:payload.keyword}
            default:
                return state
    }
}

export default reducer