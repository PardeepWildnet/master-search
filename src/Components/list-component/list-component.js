import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';

export class ListDisplayComponent extends Component{
	constructor(props){
		super(props);
		this.selectedProduct = this.selectedProduct.bind(this);
		console.log(props, "Props");
	}

	selectedProduct(event){
		console.log('called', event, this.props.title);
		this.props.history.push('/list-detail/' + this.props.title.id);
	}
	render(){
		return (
			<div>
				<li>
					<Link to={`/list-detail/${this.props.title.id}`}>
						<div>
							<span>
								<img src={require(this.props.title.embed_url)} />
							</span>
							<p>{this.props.title ? this.props.title.slug : 'No Title here'}</p>
						</div>
					</Link>
				</li>
			</div>
		)
	}
}

{/*<Link to={`/list-detail/${this.props.title.id}`}>*/}