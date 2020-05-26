import React, { Component } from 'react';
import Order from './components/customer/order';
import Cart from './components/customer/cart';
import Navbar from './components/navbar.js';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './components/about.js';
import Home from './components/home.js';
import Contact from './components/contact.js';
import SignIn from './components/signin.js';
import Stock from './components/admin/stock';
import Drink from './components/admin/drink';

class App extends Component {
  state = {
    products: [  
    {name: "Tea", price: 1.5, stock: 5, id: "1"},
    {name: "Coffee", price: 1, stock: 5, id: "2"},
    {name: "Juice", price: 2, stock: 3, id: "3"}
  ],
  transactions: [
    {customer:"wael",drink: "Tea", quantity: 1},
    {customer:"absr",drink: "Juice", quantity: 3}
  ]
  }

  deleteTransaction = (id) => {
    let transactions = this.state.transactions.filter(
    item => {return item.customer !== id})
      this.setState({transactions: transactions})
  }

addOrder = (order)=> {
  order.quantity = parseInt(order.quantity);
  let transactions = [...this.state.transactions,order];
  this.setState(
    {transactions: transactions}
  );
  /*let transactions = [...this.state.transactions];
  let transaction = {name: "",}
  const customerIndex = transactions.find(item => item.customer === order.customer);
  if(customerIndex)
  {
    const drinkIndex = transactions.drinks.find(drink => drink.name === order.drink);
    if(drinkIndex)
    {
      transactions[customerIndex].drinks[drinkIndex].quantity += order.quantity;
    }
    else{
      const toPush= {name: order.drink , quantity: order.quantity};
      transactions[customerIndex].drinks.push(toPush);

    }
  }
  else{
    transactions.push(order);
  }*/
}
  render()
  { return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route path='/' exact component={SignIn}/> 
        <Route path='/home' component={Home}/>
        <Route path='/order' render={(props) => <Order addOrder={this.addOrder} products={this.state.products} isAuthed={true} />}/>
        <Route path='/order' render={(props) => <Cart deleteTransaction={this.deleteTransaction} transList={this.state.transactions} isAuthed={true} />}/>
        <Route path='/stock' component={Stock}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path="/:drink_id" component={Drink}/>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
