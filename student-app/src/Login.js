import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';
class Login extends React.Component {
  constructor(props){
    super(props)
    let loggedIn=false;
    this.state={
      username:'',
      password:'',
      loggedIn
    }
    this.onChange=this.onChange.bind(this)
    this.submitForm=this.submitForm.bind(this)
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  submitForm(e){
    e.preventDefault()
    const {username, password} = this.state;
    if(username==="student" && password=== "student@123"){
       this.setState({
         loggedIn:true
       })
    }
  }

    
      render() {
        if(this.state.loggedIn){
          return <Redirect to="/studentcards"/>
        }
    
           
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" name="username" placeholder="Enter Name" value={this.state.username} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange}/>
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Login</button>
           </form>
        </React.Fragment>)
    }
}
export default Login;
