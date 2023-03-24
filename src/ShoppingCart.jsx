import React, {Component} from "react";
import Product from "./Product";
export default class ShoppingCart extends Component{

    //executes when the component is mounted
    constructor(){
        super()//calling super class's constructor
//initialization of the state
    this.state = {
        products: [],
    };
    }

    
    render (){
        return <div>
            <h4>Shopping Cart</h4>

            <div className="row">{this.state.products.map((prod)=>{
                return <Product 
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement= {this.handleDecrement}
                onDelete={this.handleDelete}>
                         <button className="btn btn-primary">Buy Now</button>
                       </Product>
            })}</div>
            </div>
    }
    //render ends here

    //executes after constructor and render method(includes the lifecycle of child components, if any)of current component
     componentDidMount = async() => {
        //fetch data from data source
        var response = await fetch("http://localhost:5000/products",{method: "GET",
    });
        var prods = await response.json();

        this.setState({products: prods});
        console.log("componentDidMount-Shopping Cart")
    }

    componentDidUpdate(prevProps, prevState){
        console.log(
            "componentDidUpdate-Shopping Cart",
            prevProps,
            prevState,
            this.props,
            this.state
        );
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount-Shopping cart")
    }
    
    componentDidCatch(error,info){
        console.log("componentDidCatch-Shopping cart")
        console.log(error,info)

        localStorage.lastError = `${error}\n${JSON.stringify(info)}`
    }
    //executes when user clicks on "+" button 
    handleIncrement = (product, maxValue) =>{
        //gets index of selected product
        let allProducts= [...this.state.products];
        let index= allProducts.indexOf(product);
        if(allProducts[index].quantity < maxValue){
            allProducts[index].quantity ++;
        //updates the state of current component(parent component)
        this.setState({products: allProducts});
        
        }
    };

    //executes when user clicks on "-" button 
    handleDecrement = (product, minValue) =>{
        //gets index of selected product
        let allProducts= [...this.state.products];
        let index= allProducts.indexOf(product);
        if(allProducts[index].quantity > minValue){

            allProducts[index].quantity --;
        //updates the state of current component(parent component)
        this.setState({products: allProducts});
        }
    };
    //executes when the user clicks Delete (X) button in the Product component
    handleDelete =(product)=>{
        //gets index of selected product
        let allProducts= [...this.state.products];
        let index= allProducts.indexOf(product);
        if (window.confirm("Are you sure to delete?")) {
            //deletes product based on index
        allProducts.splice(index, 1)

        //updates the state of current component(parent component)
        this.setState({products: allProducts});
        }
    }
}