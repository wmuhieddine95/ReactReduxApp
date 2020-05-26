import React,{Component} from 'react';
import AddProduct from './addproduct';
import DisplayProduct from './displayproduct';

class Stock extends Component{
  state = {
    products: [
      {name: "Tea", price: 1.5, stock: 5, id: "1"},
      {name: "Coffee", price: 1, stock: 5, id: "2"},
      {name: "Juice", price: 2, stock: 3, id: "3"}
    ]
  }

  insertProduct = (product) => 
  {
    product.id=Math.random()+3+"";
    product.price= parseInt(product.price);
    product.stock= parseInt(product.stock);
    let pList = [...this.state.products,product];
    this.setState(
      {
        products: pList
      }
    )
    console.log(pList);
  }

  deleteProduct = (id) => {
    let products = this.state.products.filter(
      product => {return product.id !== id }
    );
    this.setState({products: products})
  }

  componentDidMount(){
    console.log("Component is Mounted");
  } 

  componentDidUpdate(){
    console.log("Before Update:" + this.state.products);
  }

  render() {
  return (
    <div className="Stock">
      <h1> My CoffeeShop </h1>
      <p> Welcome to the owner's page</p>
      <AddProduct insertProduct={this.insertProduct}/>
      <DisplayProduct deleteProduct={this.deleteProduct} products = {this.state.products}/>
    </div>
  );
}
}

export default Stock;