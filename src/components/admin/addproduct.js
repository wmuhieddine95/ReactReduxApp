import {Component} from 'react'
import React from 'react'


class AddProduct extends Component{
    state = { 
    name:null,price:0,stock:0
    };
    entryHandler = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    insertData = (e) => {
        e.preventDefault();
        this.props.insertProduct(this.state);
    }
    render(){
        //const {products} = this.props;
        return(
            <form className="add-product" onSubmit={this.insertData}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={this.entryHandler}/>
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" onChange={this.entryHandler}/>
                <label htmlFor="name">Stock: </label>
                <input type="number" id="stock" onChange={this.entryHandler}/>
                <button>Submit</button>
            </form>
        );
    }
}
export default AddProduct;