import React from "react";

class Emp extends React.Component{
   
render(){
    return <div>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr/>
        <h1>{JSON.stringify(this.props.details.uId)}</h1>
        <hr/>
        <h1>{JSON.stringify(this.props.details.uName)}</h1>
        <hr/>
        <h1>{JSON.stringify(this.props.details.uEmail)}</h1>
    </div>
}

}

export default Emp;
