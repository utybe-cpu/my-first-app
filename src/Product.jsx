import React, {Component} from "react";

export default class Product extends Component{
    render(){
        return <div className="card">
            <div className="card-body">
                <div className="text-muted">#{this.props.id}</div>
            </div>
            </div>
    }
}