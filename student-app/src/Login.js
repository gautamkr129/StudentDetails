import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
    }
  }

  nameChangeHandler=(event) =>{
    this.setState({
      username: event.target.value
    });
  }

  passwordChangedHandler=(event) => {
    this.setState({
      password: event.target.value
    });
  }


    
      render() {
        if(this.props.status==="loggedIn"){
          return<Redirect to="/studentcards"/>
        }
    
           
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" name="username" placeholder="Enter Name" value={this.state.username} onChange={this.nameChangeHandler}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.passwordChangedHandler}/>
                </div>
               <button type="submit" className="btn btn-primary" onClick={() =>this.props.login(this.state.username, this.state.password)}>Login</button>
           </form>
        </React.Fragment>)
    }
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username,password) => dispatch({type:'LOGIN_REQUEST', username:username, password:password}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
