import React from "react";
class FCB extends React.Component{
    render(){
        return <div>
            <h2>FCB</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>{JSON.stringify(this.props.eid)}</h3>
            <h3>{JSON.stringify(this.props.ename)}</h3>
        </div>
    }
}

export default FCB;