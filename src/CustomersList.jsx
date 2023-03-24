import { timers } from "jquery";
import React, { Component } from "react";


export default class CustomersList extends Component{
    state = {
        pageTitle: "Customers", 
        customersCount: 5,
        customers:[
            {
                id:1,
                name:"Scott",
                phone:"123-456",
                address:{city:"New Delhi"},
                photo: "https://picsum.photos/id/1010/60"
            },
            {
                id:2,
                name:"Jones",
                phone:"982-014",
                address:{city:"New Jersey"},
                photo: "https://picsum.photos/id/1012/60"
            },
            {
                id:3,
                name:"Allen",
                phone:"889-921",
                address:{city:"London"},
                photo: "https://picsum.photos/id/1013/60"
            },
            {
                id:4,
                name:"James",
                phone:null,
                address:{city:"Berlin"},
                photo: "https://picsum.photos/id/1014/60"
            },
            {
                id:5,
                name:"John",
                phone:null,
                address:{city:"New York"},
                photo: "https://picsum.photos/id/1015/60"
            },
        ]
    };
    customerNameStyle = (custName) => {
        if(custName.startsWith ('S')) return "green-highlight border-left";
        else if (custName.startsWith ('J')) return "red-highlight border-right"
        else return "";
    };
    render(){
        return <div>
            <h4 className="m-1 p-1">
                {this.state.pageTitle} <span className="badge badge-secondary m-2">
                    {this.state.customersCount}</span> 
            <button className="btn btn-info" onClick=
            {this.onRefreshClick}>Refresh</button>
            </h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>{this.getCustomerRow()}</tbody>
            </table>
        </div>
    }
    //Executes when the user clicks on refresh button
    onRefreshClick = () =>{
        this.setState({
            customersCount:7,
        });
    }
    getPhoneToRender = (phone) =>
    {
        return (phone)? (
            (phone)
        ):(
            <div className="bg-warning p-2 text-center">No Phone</div>
        )
    }
    getCustomerRow = () =>{
        return (
            this.state.customers.map((cust, index)=> {
                return(
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td><img src= {cust.photo} alt="Customer"/>
                        <div>
                            <button className="btn btn-sm btn-secondary" onClick={()=>{this.onChangePictureClick(cust, index);}}>
                                Change picture</button>
                        </div>
                        </td>
                        <td>{cust.name}</td>
                        <td>{this.getPhoneToRender(cust.phone)}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                );
            }));        
    };
    //Executes wen user clicks on "Change Picture" Button in the grid
    //Receives the 'customer' object and index of the currently clicked customer
    onChangePictureClick= (cust, index) =>{

        //gets existing customers 
                var custArr = this.state.customers
                custArr[index].photo= "https://picsum.photos/id/1015/60";

                //Updates customer array in the state
                this.setState({customers: custArr});
    }
}