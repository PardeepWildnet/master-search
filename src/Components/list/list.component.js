import React, { Component } from 'react';
import axios from 'axios';

import { ListDisplayComponent } from '../list-component/list-component';

export class ListComponent extends Component {
	productList: Array<any> = [];

	constructor(){
		super();
		this.state = {
			productList: [],
			searchtext: null,
			loader: false
		}
		this.searchProduct = this.searchProduct.bind(this);
	}

	componentDidMount(){
		this.getProductList();
		this.refs.searchtext.focus();
	}

	getProductList(){
		// let url = 'http://iosapptest.azurewebsites.net/api/values/5';
		let url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
		this.setState({
			loader: true
		})

		axios.get(url)
		  .then(response => {
		    console.log(response.data, "response from data");
		    this.setState({
		      productList: response.data.data,
		      loader: false
		    })
		  })
		  .catch(error => {
		    console.log('Error fetching and parsing data', error);
		  });
	}

	searchProduct(){
		let searchtext = this.refs.searchtext.value;
		console.log(searchtext);
		if(searchtext == '' || null)
			console.log('empty search');
	}

	getDetail(event){
		console.log(event, '---');
	}

    render() {
        return (
            <div>
                <input placeholder='Mater Search here' ref='searchtext' onChange={ this.searchProduct }  />
                <ul style={{'textAlign': 'left'}}>
                	{this.state.productList.length ? 
                		this.state.productList.map((item, i) => {
                			return <ListDisplayComponent key={item.slug} onClick={this.getDetail} title={item}></ListDisplayComponent> })
                		: ''}
                </ul>
                {this.state.loader ? <p> Loading...</p> : ''}
            </div>
        );
    }
}