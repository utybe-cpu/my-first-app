import React, {Component} from "react";

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={email:"", password:"", message:""};
    }
    render(){
        return <div>
            <h4 className="m-1 p-2 border-bottom">Login</h4>
            {/*Email Starts */}
            <div className="form-group form-row">
                <label htmlFor="" className="col-lg-4">Email:</label>
                <input type="text" 
                className="form-control"
                 value={this.state.email}
                 onChange={(event)=> {this.setState({email:event.target.value});
                 }}/>
            {/*Email Ends */}

            </div>

            {/*Password Starts */}
            <div className="form-group form-row">
                <label htmlFor="" className="col-lg-4">Password:</label>
                <input type="password"
                 className="form-control"
                  value={this.state.password}
                  onChange={(event)=> {this.setState({password:event.target.value});
                 }}/>
            {/*Password Ends */}
            </div>
            <div className="text-right">
                {this.state.message}
                <button className="btn btn-primary m-1" onClick={this.onLoginClick}>Login</button>
            </div>
            </div>
    }//end of render
    onLoginClick= async ()=>{

        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
        {method: "GET"}
        );

        var body = await response.json();
        if(body.length>0)
        {
            //success message
            this.setState({message: (<span className="text-success">Successfully Logged In!</span>),
        });
    }else{
        //error message
        this.setState({message: (<span className="text-danger">Invalid Email or Password</span>),
    });
    }
}
}