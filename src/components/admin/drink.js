import React,{Component} from 'react'

class Drink extends Component{
    state = {
        id:null
    }
    componentDidMount(){
        console.log(this.props.match);
        let id=this.props.match.params.drink_id;
        this.setState = ({
            id: id
        })
    }
    render(){
        return(
            <div className="container">
                <p>{this.props.id}</p>
            </div>
        )
    }
}

export default Drink;