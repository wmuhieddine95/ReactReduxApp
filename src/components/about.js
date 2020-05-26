import React, {Component} from "react";
import axios from 'axios'
//import {client} from '../hoc/mongoclient';

class About extends Component{
    state= {
         
    }
    componentDidMount(){
        const BASE_URL = 'URL';
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        const TODAY = dd + '-' + mm + '-' + yyyy;
        const URL = BASE_URL + TODAY
        //axios.get('URL')
        axios.get(URL, {params:{
            address: 'Paris,France',
            method: '3'
        }
        })
        .then(res => {
            const toGet=res.data
            this.setState({
                toGet,
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return(
            <div className="container">
                <h4>About:</h4>
                <p> Founded in 2019</p>
                <p> {this.state} </p>
                <p>  </p>
            </div>
        )
    }
}
export default About;
