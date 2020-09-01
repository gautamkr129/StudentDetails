

var  initialState = {
  status: 'logged out'
};

const loginReducer= (state = initialState, action)=> {
  if (action.type=== 'LOGIN_REQUEST' && action.username==='student' && action.password==='student@123') {
    
      
    return {
      ...state, status: 'loggedIn'
    };
      
  }
  return state;
};

export default loginReducer;