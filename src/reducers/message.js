import * as types from './../constants/ActionType' ;
import * as messages from './../constants/Message'

var initialstate=messages.MSG_WELCOME;
    


const message=(state=initialstate,action)=>{
    switch(action.type){   
        case types.CHANGE_MESSAGE:
            return[...action.message];
        default:
            return [...state];
    }

}

export default message;