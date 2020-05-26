import React,{Component} from 'react'

class Order extends Component{
    state= {
    customer: null, drink:null,quantity:0
    }
    fillDropdown = this.props.products.map(product => 
        {return(
            <li key={product.id} onClick={(e) => this.setState({drink : product.id})}>
            {product.name}
            </li>
        )}
        );
    
        entryHandler = (e) => {
        this.setState(
            {
                [e.target.id] : e.target.value
            }
        )
    }

    submitHandler = (e) => {
        console.log(this.props);
        console.log(this.state);
        e.preventDefault();
        this.props.addOrder(this.state)
    }
    render(){
        return(
            <form className="add-order" onSubmit={this.submitHandler}>
                <label> Customer: </label>
                <input type="text" id="customer" className="validate" onChange={this.entryHandler}/>
                <ul id="drink-list">Drinks List: {this.fillDropdown}</ul>
                <label> Quantity: </label>
                <input type="number" id="quantity" className="validate" onChange={this.entryHandler}/>
                 
                <button>Order</button>
            </form>
        )
    }
}
export default Order;