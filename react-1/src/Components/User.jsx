import React from "react";
import Emp from "./Emp";

class User extends React.Component{
    user_Details = {
        uId: 101, 
        uName: "CharanKumar", 
        uEmail: 'charank347@gmail.com'
    }

render(){
    return <div>
        <h1>User Component</h1>
        <hr />
        <Emp details={this.user_Details} />
    </div>
}

}

export default User;
